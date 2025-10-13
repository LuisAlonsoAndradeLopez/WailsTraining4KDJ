// TODO: Fix the last 4 functions of storage and delete comprobantes
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

type ComprobanteDataSerializerAndStoragerService struct {
	bboltDb *bolt.DB
	ctx     context.Context

	// concurrency controls
	maxWorkers int

	// Comprobantes registry
	availableComprobantesFetchingTasks          sync.Map
	availableComprobantesFetchingTasksWaitGroup sync.WaitGroup
}

type availableComprobanteFetchingTask struct {
	comprobante comprobante.Comprobante

	// control
	mutex         sync.Mutex // protects paused/cancelled/fetched/err
	condition     *sync.Cond // condition for pause/resume
	err           error
	fetchingState string //queued, fetching, fetched, error
}

func NewComprobanteDataSerializerAndStoragerService(db *bolt.DB) *ComprobanteDataSerializerAndStoragerService {
	s := &ComprobanteDataSerializerAndStoragerService{
		bboltDb:    db,
		maxWorkers: 20, // configurable concurrency
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (jdsass *ComprobanteDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	jdsass.ctx = ctx
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) getOrCreateAvailableComprobanteFetchingTask(comprobanteData comprobante.Comprobante) *availableComprobanteFetchingTask {
	if v, ok := jdsass.availableComprobantesFetchingTasks.Load(comprobanteData); ok {
		return v.(*availableComprobanteFetchingTask)
	}

	acft := &availableComprobanteFetchingTask{
		comprobante:   comprobanteData,
		fetchingState: "queued",
	}

	acft.condition = sync.NewCond(&acft.mutex)
	actual, _ := jdsass.availableComprobantesFetchingTasks.LoadOrStore(comprobanteData, acft)
	return actual.(*availableComprobanteFetchingTask)
}

// availableComprobanteFetchingTasksWorker does the actual download and supports pause/resume/cancel
func (jdsass *ComprobanteDataSerializerAndStoragerService) availableComprobanteFetchingTasksWorker(acft *availableComprobanteFetchingTask) {
	acft.mutex.Lock()
	switch acft.fetchingState {
	case "completed":
		acft.mutex.Unlock()
		return
	default:
		acft.fetchingState = "fetching"
	}
	acft.mutex.Unlock()

	err := jdsass.StorageAvailableComprobante(acft.comprobante)
	if err != nil {
		acft.mutex.Lock()
		acft.err = err
		acft.fetchingState = "error"
		acft.mutex.Unlock()
		return
	}

	acft.mutex.Lock()
	acft.fetchingState = "fetched"
	acft.mutex.Unlock()
}

// Functions for use in ComprobanteDataSerializerAndStorager.vue
func (jdsass *ComprobanteDataSerializerAndStoragerService) FetchAvailableComprobantes() ([]comprobante.Comprobante, error) {
	rootPath := "C:/Users/wmike/Documents/Nobeno Zemeztre/Prrrrrrrrrrrrácticas de Ingeniebría de Software/2025"
	var xmlsPaths []string

	err := filepath.WalkDir(rootPath, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".xml" {
			xmlsPaths = append(xmlsPaths, path)
		}

		return nil
	})
	if err != nil {
		return nil, err
	}

	jobs := make(chan string)
	results := make(chan comprobante.Comprobante)
	errs := make(chan error)

	go func() {
		for _, path := range xmlsPaths {
			jobs <- path
		}
		close(jobs)
	}()

	for i := 0; i < jdsass.maxWorkers; i++ {
		jdsass.availableComprobantesFetchingTasksWaitGroup.Add(1)
		go func() {
			defer jdsass.availableComprobantesFetchingTasksWaitGroup.Done()
			for path := range jobs {
				data, err := os.ReadFile(path)
				if err != nil {
					errs <- fmt.Errorf("read %s: %w", path, err)
					continue
				}

				comp, err := comprobante.SerializeComprobanteFromXml(data)
				if err != nil {
					errs <- fmt.Errorf("unmarshal %s: %w", path, err)
					continue
				}

				task := jdsass.getOrCreateAvailableComprobanteFetchingTask(comp)
				jdsass.availableComprobantesFetchingTasksWaitGroup.Add(1)
				go func(t *availableComprobanteFetchingTask) {
					defer jdsass.availableComprobantesFetchingTasksWaitGroup.Done()
					jdsass.availableComprobanteFetchingTasksWorker(t)
				}(task)

				results <- comp
			}
		}()
	}

	go func() {
		jdsass.availableComprobantesFetchingTasksWaitGroup.Wait()
		close(results)
		close(errs)
	}()

	var comprobantes []comprobante.Comprobante
	for r := range results {
		comprobantes = append(comprobantes, r)
	}

	jdsass.availableComprobantesFetchingTasksWaitGroup.Wait()
	return comprobantes, nil
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) FetchStoragedComprobantes() ([]comprobante.Comprobante, error) {
	var comprobantes []comprobante.Comprobante

	err := jdsass.bboltDb.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Comprobantes"))
		return bucket.ForEach(func(_, comprobanteInBytes []byte) error {
			comp, err := comprobante.SerializeComprobanteFromXml(comprobanteInBytes)
			if err != nil {
				return err
			}

			comprobantes = append(comprobantes, comp)
			return nil
		})
	})

	return comprobantes, err
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) StorageAllAvailableComprobantes(comprobantes []map[string]interface{}) error {

	return nil
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) DeleteAllStoragedComprobantes(comprobantes []map[string]interface{}) error {

	return nil
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) StorageAvailableComprobante(comprobante map[string]interface{}) error {
	comprobanteInBytes, err := json.Marshal(comprobante)
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	comprobante40, ok := comprobante["Comprobante40"].(map[string]any)
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
		return b.Put([]byte(uuid), comprobanteInBytes)
	})
	if err != nil {
		return fmt.Errorf("write failed: %w", err)
	}

	return nil
}

func (jdsass *ComprobanteDataSerializerAndStoragerService) DeleteStoragedComprobante(xmlConvertedToComprobante map[string]interface{}) error {
	// Extract Comprobante40
	comprobante40, ok := xmlConvertedToComprobante["Comprobante40"].(map[string]any)
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
