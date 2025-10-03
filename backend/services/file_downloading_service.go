//Create StartDownload method by my own

package services

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/wailsapp/wails/v2/pkg/runtime"

	"wailstraining4kdj/backend/auxiliary"
)

type SampleFile struct {
	ID               string `json:"id"` // the download URL is the ID
	FileType         string `json:"fileType"`
	SizeInText       string `json:"sizeInText"` // only for show the data in FileDownloader.vue files table, do not convert data to bytes with it because that is the prupose of SizeInBytes
	SizeInBytes      int64  `json:"sizeInBytes"`
	DownloadURL      string `json:"downloadUrl"`
	Downloaded       int64  `json:"downloaded"`
	DownloadProgress int    `json:"downloadProgress"` // 0-100
	State            string `json:"state"`            // idle | downloading | paused | cancelled | completed | error
	Error            string `json:"error,omitempty"`
}

type FileDownloadingService struct {
	downloadDir string
	ctx         context.Context

	// concurrency controls
	maxWorkers int
	semaphore  chan struct{} // buffered channel as semaphore

	// sampleFiles registry
	sampleFiles          sync.Map
	sampleFilesWaitGroup sync.WaitGroup // For use in StartAllDownloads function to wait until enqueued sampleFiles are finished

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
	mutex     sync.Mutex // protects paused/cancelled/downloaded/err
	condition *sync.Cond // condition for pause/resume
	paused    bool
	cancel    bool
	err       error
	state     string // same values as SampleFile.State

	// runtime
	filepath string
}

func NewFileDownloadingService() *FileDownloadingService {
	homeDir, _ := os.UserHomeDir()
	defaultDir := filepath.Join(homeDir, "Downloads")

	s := &FileDownloadingService{
		downloadDir: defaultDir,
		maxWorkers:  6,                      // configurable concurrency
		semaphore:   make(chan struct{}, 6), // buffered to maxWorkers
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (f *FileDownloadingService) SetContext(ctx context.Context) {
	f.ctx = ctx
}

// downloadWorker does the actual download and supports pause/resume/cancel
func (fds *FileDownloadingService) downloadWorker(sampleFile *downloadSampleFile) {
	sampleFile.mutex.Lock()
	// if previously paused or cancelled, handle
	if sampleFile.cancel {
		sampleFile.state = "cancelled"
		sampleFile.mutex.Unlock()
		return
	}
	sampleFile.state = "downloading"
	sampleFile.mutex.Unlock()

	// prepare file path
	outPath := filepath.Join(fds.downloadDir, sampleFile.FileName)
	sampleFile.filepath = outPath

	// Check if partial file exists (for resume)
	var startOffset int64 = 0
	fi, err := os.Stat(outPath)
	if err == nil {
		startOffset = fi.Size()
		sampleFile.downloaded = startOffset
	}

	// Create / open file for append
	f, err := os.OpenFile(outPath, os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		sampleFile.mutex.Lock()
		sampleFile.err = err
		sampleFile.state = "error"
		sampleFile.mutex.Unlock()
		return
	}
	defer f.Close()

	// Seek to offset
	if startOffset > 0 {
		if _, err := f.Seek(startOffset, 0); err != nil {
			// ignore
		}
	}

	// Build request with Range if resuming
	client := &http.Client{Timeout: 0}
	req, _ := http.NewRequest("GET", sampleFile.URL, nil)
	if startOffset > 0 {
		req.Header.Set("Range", "bytes="+strconv.FormatInt(startOffset, 10)+"-")
	}
	req.Header.Set("User-Agent", "WailsDownloader/1.0")
	resp, err := client.Do(req)
	if err != nil {
		sampleFile.mutex.Lock()
		sampleFile.err = err
		sampleFile.state = "error"
		sampleFile.mutex.Unlock()
		return
	}
	defer resp.Body.Close()

	// If server gave Content-Length, compute total size
	if resp.StatusCode >= 400 {
		sampleFile.mutex.Lock()
		sampleFile.err = fmt.Errorf("status %d", resp.StatusCode)
		sampleFile.state = "error"
		sampleFile.mutex.Unlock()
		return
	}

	var totalSize int64 = 0
	if cl := resp.Header.Get("Content-Length"); cl != "" {
		n, _ := strconv.ParseInt(cl, 10, 64)
		totalSize = n + startOffset // if resumed, add offset
	}
	sampleFile.mutex.Lock()
	sampleFile.sizeInBytes = totalSize
	sampleFile.mutex.Unlock()

	// read loop with small buffer; check paused/cancel frequently
	buf := make([]byte, 32*1024) // 32KB buffer
	ticker := time.NewTicker(300 * time.Millisecond)
	defer ticker.Stop()

readerLoop:
	for {
		// handle pause/cancel before each Read
		sampleFile.mutex.Lock()
		for sampleFile.paused && !sampleFile.cancel {
			sampleFile.state = "paused"
			sampleFile.condition.Wait()
		}
		if sampleFile.cancel {
			sampleFile.state = "cancelled"
			sampleFile.mutex.Unlock()
			break readerLoop
		}
		sampleFile.state = "downloading"
		sampleFile.mutex.Unlock()

		// non-blocking read
		n, readErr := resp.Body.Read(buf)
		if n > 0 {
			wn, werr := f.Write(buf[:n])
			if werr != nil {
				sampleFile.mutex.Lock()
				sampleFile.err = werr
				sampleFile.state = "error"
				sampleFile.mutex.Unlock()
				break readerLoop
			}
			sampleFile.mutex.Lock()
			sampleFile.downloaded += int64(wn)
			// compute progress
			if sampleFile.sizeInBytes > 0 {
				jobProgress := int((sampleFile.downloaded * 100) / sampleFile.sizeInBytes)
				sampleFile.mutex.Unlock()
				_ = jobProgress // just stored in sampleFile below
			} else {
				sampleFile.mutex.Unlock()
			}
		}

		if readErr != nil {
			if readErr == io.EOF {
				// finished
				sampleFile.mutex.Lock()
				sampleFile.state = "completed"
				// set progress 100
				sampleFile.downloaded = sampleFile.sizeInBytes
				sampleFile.mutex.Unlock()
			} else {
				sampleFile.mutex.Lock()
				sampleFile.err = readErr
				sampleFile.state = "error"
				sampleFile.mutex.Unlock()
			}
			break readerLoop
		}

		// Periodically update (non-blocking) - optional short sleep to allow status polling
		select {
		case <-ticker.C:
			// just continue; status will reflect sampleFile.downloaded
		default:
			// continue immediately
		}
	}
}

func (fds *FileDownloadingService) getOrCreateSampleFile(url string) *downloadSampleFile {
	if v, ok := fds.sampleFiles.Load(url); ok {
		return v.(*downloadSampleFile)
	}

	// Create new sampleFile
	fileName := filepath.Base(url)
	if strings.Contains(fileName, "?") {
		fileName = strings.SplitN(fileName, "?", 2)[0]
	}

	if fileName == "" || fileName == "/" {
		fileName = "download"
	}

	sampleFile := &downloadSampleFile{
		ID:       url,
		URL:      url,
		FileName: fileName,
		state:    "idle",
	}
	sampleFile.condition = sync.NewCond(&sampleFile.mutex)
	actual, _ := fds.sampleFiles.LoadOrStore(url, sampleFile)
	return actual.(*downloadSampleFile)
}

// Functions for FilesDownloader
// GetSampleFilesStatus returns the list of sampleFile statuses for the frontend to poll
func (fds *FileDownloadingService) GetSampleFilesStatus() []SampleFile {
	var statuses []SampleFile
	fds.sampleFiles.Range(func(k, v interface{}) bool {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		progress := 0
		if sampleFile.sizeInBytes > 0 {
			progress = int((sampleFile.downloaded * 100) / sampleFile.sizeInBytes)
			if progress > 100 {
				progress = 100
			}
		} else if sampleFile.state == "completed" {
			progress = 100
		}
		st := SampleFile{
			ID:               sampleFile.ID,
			FileType:         sampleFile.FileName,
			DownloadURL:      sampleFile.URL,
			SizeInText:       sampleFile.sizeInText,
			SizeInBytes:      sampleFile.sizeInBytes,
			Downloaded:       sampleFile.downloaded,
			DownloadProgress: progress,
			State:            sampleFile.state,
		}
		if sampleFile.err != nil {
			st.Error = sampleFile.err.Error()
		}
		sampleFile.mutex.Unlock()

		statuses = append(statuses, st)
		return true
	})
	return statuses
}

func (f *FileDownloadingService) FetchSampleFilesInformation() ([]SampleFile, error) {
	urls := []string{
		"https://file-examples.com/index.php/sample-video-files/sample-avi-files-download",
		"https://file-examples.com/index.php/sample-video-files/sample-mov-files-download",
		"https://file-examples.com/index.php/sample-video-files/sample-mp4-files",
		"https://file-examples.com/index.php/sample-video-files/sample-ogg-files-download",
		"https://file-examples.com/index.php/sample-video-files/sample-webm-files-download",

		"https://file-examples.com/index.php/sample-audio-files/sample-mp3-download",
		"https://file-examples.com/index.php/sample-audio-files/sample-wav-download",
		"https://file-examples.com/index.php/sample-audio-files/sample-ogg-download",

		"https://file-examples.com/index.php/sample-documents-download/sample-doc-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-xls-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-ppt-file",
		"https://file-examples.com/index.php/sample-documents-download/sample-pdf-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-odt-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-ods-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-odp-download",
		"https://file-examples.com/index.php/sample-documents-download/sample-rtf-download",

		"https://file-examples.com/index.php/sample-images-download/sample-jpg-download",
		"https://file-examples.com/index.php/sample-images-download/sample-png-download",
		"https://file-examples.com/index.php/sample-images-download/sample-gif-download",
		"https://file-examples.com/index.php/sample-images-download/sample-tiff-download",
		"https://file-examples.com/index.php/sample-images-download/sample-ico-download",
		"https://file-examples.com/index.php/sample-images-download/sample-svg-download",
		"https://file-examples.com/index.php/sample-images-download/sample-webp-download",

		"https://file-examples.com/index.php/text-files-and-archives-download",
	}

	var allFiles []SampleFile
	client := &http.Client{}

	for _, url := range urls {
		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			return nil, err
		}

		req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
		req.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

		res, err := client.Do(req)
		if err != nil {
			return nil, err
		}
		defer res.Body.Close()

		doc, err := goquery.NewDocumentFromReader(res.Body)
		if err != nil {
			return nil, err
		}

		doc.Find("table tbody tr").Each(func(i int, s *goquery.Selection) {
			var fileType, sizeInText, downloadURL string

			s.Find("td").Each(func(j int, td *goquery.Selection) {
				text := strings.TrimSpace(td.Text())

				if strings.Contains(strings.ToUpper(text), "MB") || strings.Contains(strings.ToUpper(text), "KB") {
					sizeInText = text
				} else {
					for _, ft := range auxiliary.FileTypes {
						if strings.Contains(strings.ToUpper(text), ft) {
							fileType = ft
							break
						}
					}
				}
			})

			downloadURL, _ = s.Find("a").Attr("href")

			if downloadURL != "" {
				allFiles = append(allFiles, SampleFile{
					FileType:    fileType,
					SizeInText:  sizeInText,
					DownloadURL: downloadURL,
				})
			}
		})
	}

	return allFiles, nil
}

func (f *FileDownloadingService) SelectFilesDownloadsDirectory() (string, error) {
	selection, err := runtime.OpenDirectoryDialog(f.ctx, runtime.OpenDialogOptions{
		Title: "Select Downloads Directory",
	})
	if err != nil {
		return "", err
	}

	f.downloadDir = selection
	return selection, nil
}

// StartAllDownloads starts downloading all URLs concurrently (with worker limitation).
// It returns immediately after scheduling downloads; you can call GetSampleFilesStatus to observe progress.
func (fds *FileDownloadingService) StartAllDownloads(urls []string) error {
	fds.initOnce.Do(func() {
		fds.semaphore = make(chan struct{}, fds.maxWorkers)
	})

	for _, url := range urls {
		sampleFile := fds.getOrCreateSampleFile(url)

		// only schedule if not already completed
		sampleFile.mutex.Lock()
		if sampleFile.state == "completed" {
			sampleFile.mutex.Unlock()
			continue
		}
		sampleFile.state = "queued"
		sampleFile.mutex.Unlock()

		// schedule worker goroutine
		fds.sampleFilesWaitGroup.Add(1)
		go func(j *downloadSampleFile) {
			defer fds.sampleFilesWaitGroup.Done()

			// acquire semaphore
			select {
			case fds.semaphore <- struct{}{}:
				// got slot
			case <-fds.ctx.Done():
				return
			}
			defer func() { <-fds.semaphore }()

			fds.downloadWorker(j)
		}(sampleFile)
	}

	// do not block here; caller can poll GetSampleFilesStatus
	return nil
}

func (fds *FileDownloadingService) PauseAllDownloads() {
	fds.sampleFiles.Range(func(k, v interface{}) bool {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		sampleFile.paused = true
		sampleFile.mutex.Unlock()
		return true
	})
}

func (fds *FileDownloadingService) ResumeAllDownloads() {
	fds.sampleFiles.Range(func(k, v interface{}) bool {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		if !sampleFile.cancel {
			sampleFile.paused = false
			sampleFile.condition.Broadcast()
		}
		sampleFile.mutex.Unlock()
		return true
	})
}

func (fds *FileDownloadingService) CancelAllDownloads() {
	fds.sampleFiles.Range(func(k, v interface{}) bool {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		sampleFile.cancel = true
		sampleFile.paused = false
		sampleFile.condition.Broadcast()
		sampleFile.state = "cancelled"
		sampleFile.mutex.Unlock()
		return true
	})
}

func (fds *FileDownloadingService) PauseDownload(id string) error {
	if v, ok := fds.sampleFiles.Load(id); ok {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		sampleFile.paused = true
		sampleFile.mutex.Unlock()
		return nil
	}
	return fmt.Errorf("sampleFile not found")
}

func (fds *FileDownloadingService) ResumeDownload(id string) error {
	if v, ok := fds.sampleFiles.Load(id); ok {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		if sampleFile.cancel {
			sampleFile.mutex.Unlock()
			return fmt.Errorf("sampleFile cancelled")
		}
		sampleFile.paused = false
		sampleFile.condition.Broadcast()
		sampleFile.mutex.Unlock()

		// If sampleFile was "idle" or "queued" or "error" and not in-flight, schedule worker again
		go func() {
			sampleFile.mutex.Lock()
			state := sampleFile.state
			sampleFile.mutex.Unlock()
			if state == "idle" || state == "queued" || state == "error" {
				fds.sampleFilesWaitGroup.Add(1)
				go func() {
					defer fds.sampleFilesWaitGroup.Done()
					select {
					case fds.semaphore <- struct{}{}:
					case <-fds.ctx.Done():
						return
					}
					defer func() { <-fds.semaphore }()
					fds.downloadWorker(sampleFile)
				}()
			}
		}()
		return nil
	}
	return fmt.Errorf("sampleFile not found")
}

func (fds *FileDownloadingService) CancelDownload(id string) error {
	if v, ok := fds.sampleFiles.Load(id); ok {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mutex.Lock()
		sampleFile.cancel = true
		sampleFile.paused = false
		sampleFile.condition.Broadcast()
		sampleFile.state = "cancelled"
		sampleFile.mutex.Unlock()
		return nil
	}
	return fmt.Errorf("sampleFile not found")
}
