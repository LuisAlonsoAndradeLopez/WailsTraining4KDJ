//TODO: Fix the jsonStoragingTasksWorker and verify if jsonStoragingTask.downloadState is necesary and pause and cancel

package services

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"io/fs"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"sync"
	"time"

	bolt "go.etcd.io/bbolt"

	"github.com/SaulEnriqueMR/kore-models/models/comprobante"
)

type JsonDataSerializerAndStoragerService struct {
	bboltDb *bolt.DB
	ctx     context.Context

	// concurrency controls
	maxWorkers int
	semaphore  chan struct{} // buffered channel as semaphore

	// jsons registry
	jsonsStoragingTasks          sync.Map
	jsonsStoragingTasksWaitGroup sync.WaitGroup // For use in StorageAllJsons and StartDownload functions to wait until enqueued jsons are finished

	// once init
	initOnce sync.Once
}

type jsonStoragingTask struct {
	json map[string]interface{}

	// control
	mutex         sync.Mutex // protects paused/cancelled/downloaded/err
	condition     *sync.Cond // condition for pause/resume
	paused        bool
	cancel        bool
	err           error
	downloadState string
}

func NewJsonDataSerializerAndStoragerService(db *bolt.DB) *JsonDataSerializerAndStoragerService {
	s := &JsonDataSerializerAndStoragerService{
		bboltDb:    db,
		maxWorkers: 6,                      // configurable concurrency
		semaphore:  make(chan struct{}, 6), // buffered to maxWorkers
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (jdsass *JsonDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	jdsass.ctx = ctx
}

func (jdsass *JsonDataSerializerAndStoragerService) getOrCreateJsonStoragingTask(json map[string]interface{}) *jsonStoragingTask {
	if v, ok := jdsass.jsonsStoragingTasks.Load(json); ok {
		return v.(*jsonStoragingTask)
	}

	jst := &jsonStoragingTask{
		json: json,
	}

	jst.condition = sync.NewCond(&jst.mutex)
	actual, _ := jdsass.jsonsStoragingTasks.LoadOrStore(json, jst)
	return actual.(*jsonStoragingTask)
}

// jsonStoragingTasksWorker does the actual download and supports pause/resume/cancel
func (jdsass *JsonDataSerializerAndStoragerService) jsonStoragingTasksWorker(jst *jsonStoragingTask) {
	jst.mutex.Lock()
	if jst.cancel {
		jst.downloadState = "cancelled"
		jst.mutex.Unlock()
		return
	}
	jst.downloadState = "downloading"
	jst.mutex.Unlock()

	outPath := filepath.Join(jdsass.downloadDir, jst.FileName)
	jst.filepath = outPath

	// verify if the file exists and continue download from the current percentage
	var startOffset int64 = 0
	fi, err := os.Stat(outPath)
	if err == nil {
		// File exists — resume from its size
		startOffset = fi.Size()
		jst.downloaded = startOffset
	} else if os.IsNotExist(err) {
		// File does not exist — start from 0
		startOffset = 0
	} else {
		// Other unexpected error (e.g., permission denied)
		jst.mutex.Lock()
		jst.err = err
		jst.downloadState = "error"
		jst.mutex.Unlock()
		return
	}

	// Open or create the file. Use O_RDWR so Seek works properly
	file, err := os.OpenFile(outPath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
	if err != nil {
		jst.mutex.Lock()
		jst.err = err
		jst.downloadState = "error"
		jst.mutex.Unlock()
		return
	}
	defer file.Close()

	// If resuming, seek to the existing offset
	if startOffset > 0 {
		if _, err := file.Seek(startOffset, io.SeekStart); err != nil {
			// handle seek error if needed
			fmt.Printf("Warning: failed to seek: %v\n", err)
		}
	}

	// Build request with Range if resuming
	jst.URL = "https://testfile.net/PDF/10MB-TESTFILE.ORG.pdf"
	client := &http.Client{Timeout: 0}
	req, _ := http.NewRequest("GET", jst.URL, nil)
	if startOffset > 0 {
		req.Header.Set("Range", "bytes="+strconv.FormatInt(startOffset, 10)+"-")
	}
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "+
		"(KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36")
	req.Header.Set("Referer", "https://testfile.net/")
	resp, err := client.Do(req)
	if err != nil {
		jst.mutex.Lock()
		jst.err = err
		jst.downloadState = "error"
		jst.mutex.Unlock()
		return
	}
	defer resp.Body.Close()

	fmt.Println("✅ URL:", jst.URL)
	fmt.Println("📡 Status code:", resp.StatusCode)
	fmt.Println("📦 Content-Length:", resp.Header.Get("Content-Length"))

	// If server gave Content-Length, compute total size
	if resp.StatusCode >= 400 {
		jst.mutex.Lock()
		jst.err = fmt.Errorf("status %d", resp.StatusCode)
		jst.downloadState = "error"
		jst.mutex.Unlock()
		return
	}

	var totalSize int64 = 0
	if cl := resp.Header.Get("Content-Length"); cl != "" {
		n, _ := strconv.ParseInt(cl, 10, 64)
		totalSize = n + startOffset // if resumed, add offset
	}
	jst.mutex.Lock()
	jst.sizeInBytes = totalSize
	jst.mutex.Unlock()

	// read loop with small buffer; check paused/cancel frequently
	buf := make([]byte, 32*1024) // 32KB buffer
	ticker := time.NewTicker(300 * time.Millisecond)
	defer ticker.Stop()

readerLoop:
	for {
		// handle pause/cancel before each Read
		jst.mutex.Lock()
		for jst.paused && !jst.cancel {
			jst.downloadState = "paused"
			jst.condition.Wait()
		}
		if jst.cancel {
			jst.downloadState = "cancelled"
			jst.mutex.Unlock()
			break readerLoop
		}
		jst.downloadState = "downloading"
		jst.mutex.Unlock()

		// non-blocking read
		n, readErr := resp.Body.Read(buf)
		if n > 0 {
			wn, werr := file.Write(buf[:n])
			if werr != nil {
				jst.mutex.Lock()
				jst.err = werr
				jst.downloadState = "error"
				jst.mutex.Unlock()
				break readerLoop
			}
			jst.mutex.Lock()
			jst.downloaded += int64(wn)

			if jst.sizeInBytes > 0 {
				jobProgress := int((jst.downloaded * 100) / jst.sizeInBytes)
				jst.mutex.Unlock()
				_ = jobProgress // just stored in jst below
			} else {
				jst.mutex.Unlock()
			}
		}

		if readErr != nil {
			if readErr == io.EOF {
				// finished
				jst.mutex.Lock()
				jst.downloadState = "completed"
				// set progress 100
				jst.downloaded = jst.sizeInBytes
				jst.mutex.Unlock()
			} else {
				jst.mutex.Lock()
				jst.err = readErr
				jst.downloadState = "error"
				jst.mutex.Unlock()
			}
			break readerLoop
		}

		// Periodically update (non-blocking) - optional short sleep to allow status polling
		select {
		case <-ticker.C:
			// just continue; status will reflect jst.downloaded
		default:
			// continue immediately
		}
	}
}

// Functions for use in JsonDataSerializerAndStorager.vue
func (jdsass *JsonDataSerializerAndStoragerService) FetchAvailableJsons() ([]comprobante.Comprobante, error) {
	rootPath := "C:/Users/wmike/Documents/Nobeno Zemeztre/Prrrrrrrrrrrrácticas de Ingeniebría de Software/2025"
	var files []comprobante.Comprobante

	err := filepath.WalkDir(rootPath, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".xml" {
			data, err := os.ReadFile(path)
			if err != nil {
				return err
			}

			if convertedComprobante, err := comprobante.SerializeComprobanteFromXml(data); err != nil {
				fmt.Printf("❌ Failed to parse %s: %v\n", path, err)
			} else {
				files = append(files, convertedComprobante)
			}
		}

		return nil
	})

	return files, err
}

func (jdsass *JsonDataSerializerAndStoragerService) FetchStoragedJsons() ([]comprobante.Comprobante, error) {
	var comprobantes []comprobante.Comprobante

	err := jdsass.bboltDb.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Comprobantes"))
		return bucket.ForEach(func(_, v []byte) error {
			var comprobante comprobante.Comprobante
			if err := json.Unmarshal(v, &comprobante); err != nil {
				return err
			}
			comprobantes = append(comprobantes, comprobante)
			return nil
		})
	})

	return comprobantes, err
}

func (jdsass *JsonDataSerializerAndStoragerService) StorageAllAvailableJsons(jsons []map[string]interface{}) error {
	jdsass.initOnce.Do(func() {
		jdsass.semaphore = make(chan struct{}, jdsass.maxWorkers)
	})

	for _, json := range jsons {
		jst := jdsass.getOrCreateJsonStoragingTask(json)

		jst.mutex.Lock()
		if jst.downloadState == "completed" {
			jst.mutex.Unlock()
			continue
		}
		jst.downloadState = "queued"
		jst.mutex.Unlock()

		jdsass.jsonsStoragingTasksWaitGroup.Add(1)
		go func(j *jsonStoragingTask) {
			defer jdsass.jsonsStoragingTasksWaitGroup.Done()

			// acquire semaphore
			select {
			case jdsass.semaphore <- struct{}{}:
				// got slot
			case <-jdsass.ctx.Done():
				return
			}
			defer func() { <-jdsass.semaphore }()

			jdsass.jsonStoragingTasksWorker(j)
		}(jst)
	}

	return nil
}

func (jdsass *JsonDataSerializerAndStoragerService) PauseAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(k, v interface{}) bool {
		jsonStoragingTask := v.(*jsonStoragingTask)
		jsonStoragingTask.mutex.Lock()
		jsonStoragingTask.paused = true
		jsonStoragingTask.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) ResumeAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(k, v interface{}) bool {
		jsonStoragingTask := v.(*jsonStoragingTask)
		jsonStoragingTask.mutex.Lock()
		if !jsonStoragingTask.cancel {
			jsonStoragingTask.paused = false
			jsonStoragingTask.condition.Broadcast()
		}
		jsonStoragingTask.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) CancelAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(k, v interface{}) bool {
		jsonStoragingTask := v.(*jsonStoragingTask)
		jsonStoragingTask.mutex.Lock()
		jsonStoragingTask.cancel = true
		jsonStoragingTask.paused = false
		jsonStoragingTask.condition.Broadcast()
		jsonStoragingTask.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) StorageAvailableJson(xmlConvertedToJson map[string]interface{}) error {
	jsonInBytes, err := json.Marshal(xmlConvertedToJson)
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	comprobante40, ok := xmlConvertedToJson["Comprobante40"].(map[string]any)
	if !ok {
		return fmt.Errorf("Comprobante40 field missing or invalid")
	}

	uuid, ok := comprobante40["Uuid"].(string)
	if !ok {
		return fmt.Errorf("Uuid field missing or invalid")
	}

	err = jdsass.bboltDb.Update(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists([]byte("Comprobantes"))
		if err != nil {
			return fmt.Errorf("bucket creation failed: %w", err)
		}
		return b.Put([]byte(uuid), jsonInBytes)
	})
	if err != nil {
		return fmt.Errorf("write failed: %w", err)
	}

	return nil
}

func (jdsass *JsonDataSerializerAndStoragerService) DeleteStoragedJson(xmlConvertedToJson map[string]interface{}) error {
	// Extract Comprobante40
	comprobante40, ok := xmlConvertedToJson["Comprobante40"].(map[string]any)
	if !ok {
		return fmt.Errorf("Comprobante40 field missing or invalid")
	}

	// Extract Uuid
	uuid, ok := comprobante40["Uuid"].(string)
	if !ok {
		return fmt.Errorf("Uuid field missing or invalid")
	}

	// Delete entry from BoltDB
	err := jdsass.bboltDb.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Comprobantes"))
		if b == nil {
			return fmt.Errorf("bucket 'Comprobantes' does not exist")
		}

		// Check if key exists
		if b.Get([]byte(uuid)) == nil {
			return fmt.Errorf("no record found with UUID: %s", uuid)
		}

		// Delete the key
		return b.Delete([]byte(uuid))
	})
	if err != nil {
		return fmt.Errorf("delete failed: %w", err)
	}

	return nil
}
