//TODO: bulkWrite mongodb equivalent function for bbolt for storage and remove all files
//Continue fixing fetchallavailablefiles

package services

import (
	"context"
	"encoding/json"
	"fmt"
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
	availableJsonsFetchingTasks          sync.Map
	availableJsonsFetchingTasksWaitGroup sync.WaitGroup
}

type availableJsonFetchingTask struct {
	json map[string]interface{}

	// control
	mutex         sync.Mutex // protects paused/cancelled/fetched/err
	condition     *sync.Cond // condition for pause/resume
	err           error
	fetchingState string //queued, fetching, fetched, error
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

func (jdsass *JsonDataSerializerAndStoragerService) getOrCreateAvailableJsonStoragingTask(jsonData map[string]interface{}) *availableJsonFetchingTask {
	keyBytes, _ := json.Marshal(jsonData)
	key := string(keyBytes)

	if v, ok := jdsass.availableJsonsFetchingTasks.Load(key); ok {
		return v.(*availableJsonFetchingTask)
	}

	ajft := &availableJsonFetchingTask{
		json:          jsonData,
		fetchingState: "queued",
	}

	ajft.condition = sync.NewCond(&ajft.mutex)
	actual, _ := jdsass.availableJsonsFetchingTasks.LoadOrStore(key, ajft)
	return actual.(*availableJsonFetchingTask)
}

// availableJsonFetchingTasksWorker does the actual download and supports pause/resume/cancel
func (jdsass *JsonDataSerializerAndStoragerService) availableJsonFetchingTasksWorker(ajft *availableJsonFetchingTask) {
	ajft.mutex.Lock()
	switch ajft.fetchingState {
	case "completed":
		ajft.mutex.Unlock()
		return
	default:
		ajft.fetchingState = "fetching"
	}
	ajft.mutex.Unlock()

	err := jdsass.StorageAvailableJson(ajft.json)
	if err != nil {
		ajft.mutex.Lock()
		ajft.err = err
		ajft.fetchingState = "error"
		ajft.mutex.Unlock()
		return
	}

	ajft.mutex.Lock()
	ajft.fetchingState = "fetched"
	ajft.mutex.Unlock()
}

// Functions for use in JsonDataSerializerAndStorager.vue
func (jdsass *JsonDataSerializerAndStoragerService) FetchAvailableJsons() ([]comprobante.Comprobante, error) {
	rootPath := "C:/Users/wmike/Documents/Nobeno Zemeztre/Prrrrrrrrrrrrácticas de Ingeniebría de Software/2025"
	var files []comprobante.Comprobante

	err := filepath.WalkDir(rootPath, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".xml" {
			data, err := os.ReadFile(path)
			if err != nil {
				return err
			}

			if convertedComprobante, err := comprobante.SerializeComprobanteFromXml(data); err != nil {
				fmt.Printf("Failed to parse %s: %v\n", path, err)
			} else {
				files = append(files, convertedComprobante)
			}
		}

		return nil
	})
	if err != nil {
		return nil, err
	}

	//Continue checking here

	jobs := make(chan string)
	results := make(chan comprobante.Comprobante)
	errs := make(chan error)
	var wg sync.WaitGroup

	workerCount := jdsass.maxWorkers
	if workerCount <= 0 {
		workerCount = 4 // default
	}

	for i := 0; i < workerCount; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for path := range jobs {
				data, err := os.ReadFile(path)
				if err != nil {
					errs <- fmt.Errorf("read %s: %w", path, err)
					continue
				}

				var jsonData map[string]interface{}
				if err := json.Unmarshal(data, &jsonData); err != nil {
					errs <- fmt.Errorf("unmarshal %s: %w", path, err)
					continue
				}

				task := jdsass.getOrCreateAvailableJsonStoragingTask(jsonData)
				jdsass.availableJsonsFetchingTasksWaitGroup.Add(1)
				go func(t *availableJsonFetchingTask) {
					defer jdsass.availableJsonsFetchingTasksWaitGroup.Done()
					jdsass.availableJsonFetchingTasksWorker(t)
				}(task)

				results <- jsonData
			}
		}()
	}

	// feed jobs
	go func() {
		for _, path := range files {
			jobs <- path
		}
		close(jobs)
	}()

	// close results when done
	go func() {
		wg.Wait()
		close(results)
		close(errs)
	}()

	var jsons []map[string]interface{}
	for r := range results {
		jsons = append(jsons, r)
	}

	// wait for internal tasks
	jdsass.availableJsonsFetchingTasksWaitGroup.Wait()

	return jsons, nil
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
		ajft := jdsass.getOrCreateAvailableJsonStoragingTask(json)

		ajft.mutex.Lock()
		ajft.fetchingState = "queued"
		ajft.mutex.Unlock()

		jdsass.availableJsonsFetchingTasksWaitGroup.Add(1)
		go func(j *availableJsonFetchingTask) {
			defer jdsass.availableJsonsFetchingTasksWaitGroup.Done()

			// acquire semaphore
			select {
			case semaphore <- struct{}{}:
				// got slot
			case <-jdsass.ctx.Done():
				return
			}
			defer func() { <-semaphore }()

			j.mutex.Lock()
			if j.fetchingState == "queued" {
				j.fetchingState = "fetching"
			}
			j.mutex.Unlock()

			jdsass.availableJsonFetchingTasksWorker(j)
		}(ajft)
	}

	jdsass.availableJsonsFetchingTasksWaitGroup.Wait()
	return nil
}

func (jdsass *JsonDataSerializerAndStoragerService) DeleteAllStoragedJsons(jsons []map[string]interface{}) error {
	semaphore := make(chan struct{}, jdsass.maxWorkers)

	for _, json := range jsons {
		jdt := jdsass.getOrCreateJsonDeletingTask(json)

		jdt.mutex.Lock()
		jdt.deletingState = "queued"
		jdt.mutex.Unlock()

		jdsass.jsonsDeletingTasksWaitGroup.Add(1)
		go func(j *jsonDeletingTask) {
			defer jdsass.jsonsDeletingTasksWaitGroup.Done()

			// Acquire semaphore
			select {
			case semaphore <- struct{}{}:
				// got slot
			case <-jdsass.ctx.Done():
				return
			}
			defer func() { <-semaphore }()

			j.mutex.Lock()
			if j.deletingState == "queued" {
				j.deletingState = "deleting"
			}
			j.mutex.Unlock()

			jdsass.jsonDeletingTasksWorker(j)
		}(jdt)
	}

	// Wait for all deleting tasks to finish
	jdsass.jsonsDeletingTasksWaitGroup.Wait()
	return nil
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
