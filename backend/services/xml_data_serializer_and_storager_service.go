package services

import (
	"context"
	"os"
	"path/filepath"
	"sync"
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
	sampleFilesWaitGroup sync.WaitGroup // For use in StartAllDownloads and StartDownload functions to wait until enqueued sampleFiles are finished

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

// StartAllDownloads starts downloading all URLs concurrently (with worker limitation).
// It returns immediately after scheduling downloads; you can call GetSampleFilesStatus to observe progress.
func (fds *XMLDataSerializerAndStoragerService) StartAllDownloads(urls []string) error {

	return nil
}

func (fds *XMLDataSerializerAndStoragerService) PauseAllDownloads() {

}

func (fds *XMLDataSerializerAndStoragerService) ResumeAllDownloads() {

}

func (fds *XMLDataSerializerAndStoragerService) CancelAllDownloads() {

}

func (fds *XMLDataSerializerAndStoragerService) StartDownload(url string) error {

	return nil
}

func (fds *XMLDataSerializerAndStoragerService) PauseDownload(id string) error {
	return nil
}

func (fds *XMLDataSerializerAndStoragerService) ResumeDownload(id string) error {
	return nil
}

func (fds *XMLDataSerializerAndStoragerService) CancelDownload(id string) error {
	return nil
}
