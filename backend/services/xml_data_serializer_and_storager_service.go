package services

import (
	"context"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"sync"

	"github.com/SaulEnriqueMR/kore-models/models/comprobante"
)

type SampleFile struct {
	ID               string `json:"id"` // the download URL is the ID
	FileType         string `json:"fileType"`
	SizeInText       string `json:"sizeInText"` // only for show the data in FileDownloader.vue files table, do not convert data to bytes with it because that is the prupose of SizeInBytes
	SizeInBytes      int64  `json:"sizeInBytes"`
	DownloadURL      string `json:"downloadUrl"`
	Downloaded       int64  `json:"downloaded"`
	DownloadProgress int    `json:"downloadProgress"` // 0-100
	DownloadState    string `json:"downloadState"`    // idle | downloading | paused | cancelled | completed | error
	Error            string `json:"error,omitempty"`
}

type XMLDataSerializerAndStoragerService struct {
	downloadDir string
	ctx         context.Context

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

func NewXMLDataSerializerAndStoragerService() *XMLDataSerializerAndStoragerService {
	homeDir, _ := os.UserHomeDir()
	defaultDir := filepath.Join(homeDir, "Downloads")

	s := &XMLDataSerializerAndStoragerService{
		downloadDir: defaultDir,
		maxWorkers:  6,                      // configurable concurrency
		semaphore:   make(chan struct{}, 6), // buffered to maxWorkers
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
			fmt.Println("📄 Found:", path)

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

func (fds *XMLDataSerializerAndStoragerService) StorageAvailableXml(url string) error {

	return nil
}

func (fds *XMLDataSerializerAndStoragerService) DeleteStoragedXml(id string) error {
	return nil
}
