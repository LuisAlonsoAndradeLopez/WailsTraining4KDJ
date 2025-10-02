package services

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

// downloadWorker does the actual download and supports pause/resume/cancel
func (fds *FileDownloadingService) downloadWorker(sampleFile *downloadSampleFile) {
	sampleFile.mu.Lock()
	// if previously paused or cancelled, handle
	if sampleFile.cancel {
		sampleFile.state = "cancelled"
		sampleFile.mu.Unlock()
		return
	}
	sampleFile.state = "downloading"
	sampleFile.mu.Unlock()

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
		sampleFile.mu.Lock()
		sampleFile.err = err
		sampleFile.state = "error"
		sampleFile.mu.Unlock()
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
		sampleFile.mu.Lock()
		sampleFile.err = err
		sampleFile.state = "error"
		sampleFile.mu.Unlock()
		return
	}
	defer resp.Body.Close()

	// If server gave Content-Length, compute total size
	if resp.StatusCode >= 400 {
		sampleFile.mu.Lock()
		sampleFile.err = fmt.Errorf("status %d", resp.StatusCode)
		sampleFile.state = "error"
		sampleFile.mu.Unlock()
		return
	}

	var totalSize int64 = 0
	if cl := resp.Header.Get("Content-Length"); cl != "" {
		n, _ := strconv.ParseInt(cl, 10, 64)
		totalSize = n + startOffset // if resumed, add offset
	}
	sampleFile.mu.Lock()
	sampleFile.size = totalSize
	sampleFile.mu.Unlock()

	// read loop with small buffer; check paused/cancel frequently
	buf := make([]byte, 32*1024) // 32KB buffer
	ticker := time.NewTicker(300 * time.Millisecond)
	defer ticker.Stop()

readerLoop:
	for {
		// handle pause/cancel before each Read
		sampleFile.mu.Lock()
		for sampleFile.paused && !sampleFile.cancel {
			sampleFile.state = "paused"
			sampleFile.cond.Wait()
		}
		if sampleFile.cancel {
			sampleFile.state = "cancelled"
			sampleFile.mu.Unlock()
			break readerLoop
		}
		sampleFile.state = "downloading"
		sampleFile.mu.Unlock()

		// non-blocking read
		n, readErr := resp.Body.Read(buf)
		if n > 0 {
			wn, werr := f.Write(buf[:n])
			if werr != nil {
				sampleFile.mu.Lock()
				sampleFile.err = werr
				sampleFile.state = "error"
				sampleFile.mu.Unlock()
				break readerLoop
			}
			sampleFile.mu.Lock()
			sampleFile.downloaded += int64(wn)
			// compute progress
			if sampleFile.size > 0 {
				jobProgress := int((sampleFile.downloaded * 100) / sampleFile.size)
				sampleFile.mu.Unlock()
				_ = jobProgress // just stored in sampleFile below
			} else {
				sampleFile.mu.Unlock()
			}
		}

		if readErr != nil {
			if readErr == io.EOF {
				// finished
				sampleFile.mu.Lock()
				sampleFile.state = "completed"
				// set progress 100
				sampleFile.downloaded = sampleFile.size
				sampleFile.mu.Unlock()
			} else {
				sampleFile.mu.Lock()
				sampleFile.err = readErr
				sampleFile.state = "error"
				sampleFile.mu.Unlock()
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

// GetJobsStatus returns the list of sampleFile statuses for the frontend to poll
func (fds *FileDownloadingService) GetJobsStatus() []SampleFile {
	var statuses []SampleFile
	fds.sampleFiles.Range(func(k, v interface{}) bool {
		sampleFile := v.(*downloadSampleFile)
		sampleFile.mu.Lock()
		progress := 0
		if sampleFile.size > 0 {
			progress = int((sampleFile.downloaded * 100) / sampleFile.size)
			if progress > 100 {
				progress = 100
			}
		} else if sampleFile.state == "completed" {
			progress = 100
		}
		st := SampleFile{
			ID:         sampleFile.ID,
			FileName:   sampleFile.FileName,
			URL:        sampleFile.URL,
			Size:       sampleFile.size,
			Downloaded: sampleFile.downloaded,
			Progress:   progress,
			State:      sampleFile.state,
		}
		if sampleFile.err != nil {
			st.Error = sampleFile.err.Error()
		}
		sampleFile.mu.Unlock()

		statuses = append(statuses, st)
		return true
	})
	return statuses
}
