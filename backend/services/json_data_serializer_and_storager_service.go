package services

import (
	"context"
	"encoding/json"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"sync"

	bolt "go.etcd.io/bbolt"

	"github.com/SaulEnriqueMR/kore-models/models/comprobante"
)

type JsonDataSerializerAndStoragerService struct {
	bboltDb *bolt.DB
	ctx     context.Context

	// concurrency controls
	maxWorkers int

	// jsons registry
	jsonsStoragingTasks          sync.Map
	jsonsStoragingTasksWaitGroup sync.WaitGroup
	jsonsDeletingTasks           sync.Map
	jsonsDeletingTasksWaitGroup  sync.WaitGroup
}

type jsonStoragingTask struct {
	json map[string]interface{}

	// control
	mutex         sync.Mutex // protects paused/cancelled/storaged/err
	condition     *sync.Cond // condition for pause/resume
	err           error
	downloadState string //queued, storaging, paused, cancelled, storaged, error
}

type jsonDeletingTask struct {
	json map[string]interface{}

	// control
	mutex         sync.Mutex // protects paused/cancelled/storaged/err
	condition     *sync.Cond // condition for pause/resume
	err           error
	deletingState string //queued, deleting, paused, cancelled, deleted, error
}

func NewJsonDataSerializerAndStoragerService(db *bolt.DB) *JsonDataSerializerAndStoragerService {
	s := &JsonDataSerializerAndStoragerService{
		bboltDb:    db,
		maxWorkers: 6, // configurable concurrency
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (jdsass *JsonDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	jdsass.ctx = ctx
}

func (jdsass *JsonDataSerializerAndStoragerService) getOrCreateJsonStoragingTask(jsonData map[string]interface{}) *jsonStoragingTask {
	keyBytes, _ := json.Marshal(jsonData)
	key := string(keyBytes)

	if v, ok := jdsass.jsonsStoragingTasks.Load(key); ok {
		return v.(*jsonStoragingTask)
	}

	jst := &jsonStoragingTask{
		json:          jsonData,
		downloadState: "queued",
	}

	jst.condition = sync.NewCond(&jst.mutex)
	actual, _ := jdsass.jsonsStoragingTasks.LoadOrStore(key, jst)
	return actual.(*jsonStoragingTask)
}

func (jdsass *JsonDataSerializerAndStoragerService) getOrCreateJsonDeletingTask(jsonData map[string]interface{}) *jsonDeletingTask {
	keyBytes, _ := json.Marshal(jsonData)
	key := string(keyBytes)

	if v, ok := jdsass.jsonsDeletingTasks.Load(key); ok {
		return v.(*jsonDeletingTask)
	}

	jdt := &jsonDeletingTask{
		json:          jsonData,
		deletingState: "queued",
	}

	jdt.condition = sync.NewCond(&jdt.mutex)
	actual, _ := jdsass.jsonsDeletingTasks.LoadOrStore(key, jdt)
	return actual.(*jsonDeletingTask)
}

// jsonStoragingTasksWorker does the actual download and supports pause/resume/cancel
func (jdsass *JsonDataSerializerAndStoragerService) jsonStoragingTasksWorker(jst *jsonStoragingTask) {
	jst.mutex.Lock()
	switch jst.downloadState {
	case "cancelled":
		jst.mutex.Unlock()
		return
	case "completed":
		jst.mutex.Unlock()
		return
	default:
		jst.downloadState = "storaging"
	}
	jst.mutex.Unlock()

	err := jdsass.StorageAvailableJson(jst.json)
	if err != nil {
		jst.mutex.Lock()
		jst.err = err
		jst.downloadState = "error"
		jst.mutex.Unlock()
		return
	}

	jst.mutex.Lock()
	jst.downloadState = "storaged"
	jst.mutex.Unlock()
}

func (jdsass *JsonDataSerializerAndStoragerService) jsonDeletingTasksWorker(jdt *jsonDeletingTask) {
	jdt.mutex.Lock()
	switch jdt.deletingState {
	case "cancelled", "deleted":
		jdt.mutex.Unlock()
		return
	default:
		jdt.deletingState = "deleting"
	}
	jdt.mutex.Unlock()

	err := jdsass.DeleteStoragedJson(jdt.json)
	jdt.mutex.Lock()
	defer jdt.mutex.Unlock()

	if err != nil {
		jdt.err = err
		jdt.deletingState = "error"
	} else {
		jdt.deletingState = "deleted"
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
	semaphore := make(chan struct{}, jdsass.maxWorkers)

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
			case semaphore <- struct{}{}:
				// got slot
			case <-jdsass.ctx.Done():
				return
			}
			defer func() { <-semaphore }()

			jdsass.jsonStoragingTasksWorker(j)
		}(jst)
	}

	return nil
}

func (jdsass *JsonDataSerializerAndStoragerService) PauseAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(_, v any) bool {
		task := v.(*jsonStoragingTask)
		task.mutex.Lock()
		if task.downloadState == "storaging" {
			task.downloadState = "paused"
		}
		task.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) ResumeAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(_, v any) bool {
		task := v.(*jsonStoragingTask)
		task.mutex.Lock()
		if task.downloadState == "paused" {
			task.downloadState = "queued"
			// Optionally: relaunch the worker
			go jdsass.jsonStoragingTasksWorker(task)
		}
		task.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) CancelAllAvailableJsonsStoraging() {
	jdsass.jsonsStoragingTasks.Range(func(_, v any) bool {
		task := v.(*jsonStoragingTask)
		task.mutex.Lock()
		if task.downloadState == "storaging" || task.downloadState == "queued" {
			task.downloadState = "cancelled"
		}
		task.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) DeleteAllStoragedJsons(jsons []map[string]interface{}) error {
	// Create a fresh semaphore for this batch
	semaphore := make(chan struct{}, jdsass.maxWorkers)

	for _, json := range jsons {
		jdt := jdsass.getOrCreateJsonDeletingTask(json)

		jdt.mutex.Lock()
		if jdt.deletingState == "deleted" {
			jdt.mutex.Unlock()
			continue
		}
		jdt.deletingState = "queued"
		jdt.mutex.Unlock()

		jdsass.jsonsDeletingTasksWaitGroup.Add(1)
		go func(j *jsonDeletingTask) {
			defer jdsass.jsonsDeletingTasksWaitGroup.Done()

			// acquire semaphore
			select {
			case semaphore <- struct{}{}:
				// got slot
			case <-jdsass.ctx.Done():
				return
			}
			defer func() { <-semaphore }()

			jdsass.jsonDeletingTasksWorker(j)
		}(jdt)
	}

	return nil
}

func (jdsass *JsonDataSerializerAndStoragerService) PauseAllStoragedJsonsDeleting() {
	jdsass.jsonsDeletingTasks.Range(func(_, v any) bool {
		task := v.(*jsonDeletingTask)
		task.mutex.Lock()
		if task.deletingState == "deleting" {
			task.deletingState = "paused"
		}
		task.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) ResumeAllStoragedJsonsDeleting() {
	jdsass.jsonsDeletingTasks.Range(func(_, v any) bool {
		task := v.(*jsonDeletingTask)
		task.mutex.Lock()
		if task.deletingState == "paused" {
			task.deletingState = "queued"
			go jdsass.jsonDeletingTasksWorker(task)
		}
		task.mutex.Unlock()
		return true
	})
}

func (jdsass *JsonDataSerializerAndStoragerService) CancelAllStoragedJsonsDeleting() {
	jdsass.jsonsDeletingTasks.Range(func(_, v any) bool {
		task := v.(*jsonDeletingTask)
		task.mutex.Lock()
		if task.deletingState == "queued" || task.deletingState == "deleting" {
			task.deletingState = "cancelled"
		}
		task.mutex.Unlock()
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
