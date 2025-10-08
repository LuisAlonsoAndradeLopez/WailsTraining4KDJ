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

type XMLDataSerializerAndStoragerService struct {
	bboltDb *bolt.DB
	ctx     context.Context

	// concurrency controls
	maxWorkers int
	semaphore  chan struct{} // buffered channel as semaphore

	// sampleFiles registry
	sampleFiles          sync.Map
	sampleFilesWaitGroup sync.WaitGroup // For use in StorageAllXMLsand StartDownload functions to wait until enqueued sampleFiles are finished

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

func (fds *XMLDataSerializerAndStoragerService) NewXMLDataSerializerAndStoragerService(db *bolt.DB) *XMLDataSerializerAndStoragerService {
	fds.bboltDb = db

	s := &XMLDataSerializerAndStoragerService{
		maxWorkers: 6,                      // configurable concurrency
		semaphore:  make(chan struct{}, 6), // buffered to maxWorkers
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (fds *XMLDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	fds.ctx = ctx
}

// Functions for use in XMLDataSerializerAndStorager.vue
func (fds *XMLDataSerializerAndStoragerService) FetchAvailableXMLs() ([]comprobante.Comprobante, error) {
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

func (fds *XMLDataSerializerAndStoragerService) StorageAllAvailableXMLs(urls []string) error {

	return nil
}

func (fds *XMLDataSerializerAndStoragerService) PauseAllAvailableXMLsStoraging() {

}

func (fds *XMLDataSerializerAndStoragerService) ResumeAllAvailableXMLsStoraging() {

}

func (fds *XMLDataSerializerAndStoragerService) CancelAllAvailableXMLsStoraging() {

}

func (fds *XMLDataSerializerAndStoragerService) StorageAvailableXml(xmlConvertedToJson map[string]interface{}) error {
	// Marshal the JSON map to bytes (for storage)
	jsonInBytes, err := json.Marshal(xmlConvertedToJson)
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	// Safely extract UUID
	comprobante40, ok := xmlConvertedToJson["Comprobante40"].(map[string]any)
	if !ok {
		return fmt.Errorf("Comprobante40 field missing or invalid")
	}

	uuid, ok := comprobante40["Uuid"].(string)
	if !ok {
		return fmt.Errorf("Uuid field missing or invalid")
	}

	// Write it to BoltDB
	err = fds.bboltDb.Update(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists([]byte("CFDIs"))
		if err != nil {
			return fmt.Errorf("bucket creation failed: %w", err)
		}
		return b.Put([]byte(uuid), jsonInBytes)
	})
	if err != nil {
		return fmt.Errorf("write failed: %w", err)
	}

	fmt.Println("✅ Stored CFDI:", uuid)
	return nil
}

func (fds *XMLDataSerializerAndStoragerService) DeleteStoragedXml(id string) error {
	return nil
}
