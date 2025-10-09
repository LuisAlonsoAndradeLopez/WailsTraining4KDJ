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
	semaphore  chan struct{} // buffered channel as semaphore

	// sampleFiles registry
	sampleFiles          sync.Map
	sampleFilesWaitGroup sync.WaitGroup // For use in StorageAllJsonsand StartDownload functions to wait until enqueued sampleFiles are finished

	// once init
	initOnce sync.Once
}

type downloadSampleFile struct {
	ID          string
	URL         string
	FileName    string
	downloaded  int64
	sizeInText  string
	sizeInBytes int64

	// control
	mutex         sync.Mutex // protects paused/cancelled/downloaded/err
	condition     *sync.Cond // condition for pause/resume
	paused        bool
	cancel        bool
	err           error
	downloadState string // same values as SampleFile.DownloadState

	// runtime
	filepath string
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
func (fds *JsonDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	fds.ctx = ctx
}

// Functions for use in JsonDataSerializerAndStorager.vue
func (fds *JsonDataSerializerAndStoragerService) FetchAvailableJsons() ([]comprobante.Comprobante, error) {
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

func (fds *JsonDataSerializerAndStoragerService) FetchStoragedJsons() ([]comprobante.Comprobante, error) {
	var comprobantes []comprobante.Comprobante

	err := fds.bboltDb.View(func(tx *bolt.Tx) error {
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

func (fds *JsonDataSerializerAndStoragerService) StorageAllAvailableJsons(urls []string) error {

	return nil
}

func (fds *JsonDataSerializerAndStoragerService) PauseAllAvailableJsonsStoraging() {

}

func (fds *JsonDataSerializerAndStoragerService) ResumeAllAvailableJsonsStoraging() {

}

func (fds *JsonDataSerializerAndStoragerService) CancelAllAvailableJsonsStoraging() {

}

func (fds *JsonDataSerializerAndStoragerService) StorageAvailableJson(xmlConvertedToJson map[string]interface{}) error {
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

	err = fds.bboltDb.Update(func(tx *bolt.Tx) error {
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

func (fds *JsonDataSerializerAndStoragerService) DeleteStoragedJson(xmlConvertedToJson map[string]interface{}) error {
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
	err := fds.bboltDb.Update(func(tx *bolt.Tx) error {
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
