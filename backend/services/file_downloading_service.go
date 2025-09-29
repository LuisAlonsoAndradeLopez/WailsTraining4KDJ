package services

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type SampleFile struct {
	FileType    string `json:"fileType"`
	Extension   string `json:"extension"`
	Size        string `json:"size"`
	DownloadURL string `json:"downloadUrl"`
}

type FileDownloadingService struct {
	downloadDir string
	ctx         context.Context
}

func NewFileDownloadingService() *FileDownloadingService {
	homeDir, _ := os.UserHomeDir()
	defaultDir := filepath.Join(homeDir, "Downloads")

	return &FileDownloadingService{
		downloadDir: defaultDir,
	}
}

// This function is only for use in app.go file
func (f *FileDownloadingService) SetContext(ctx context.Context) {
	f.ctx = ctx
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

func (f *FileDownloadingService) GetAllSampleFiles() ([]SampleFile, error) {
	client := &http.Client{}

	req, err := http.NewRequest("GET", "https://file-examples.com/index.php/sample-documents-download/", nil)
	if err != nil {
		return nil, err
	}

	// Set headers to mimic a real browser
	req.Header.Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
	req.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")

	res, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	// Parse the response body with goquery
	doc, err := goquery.NewDocumentFromReader(res.Body)
	if err != nil {
		return nil, err
	}

	var files []SampleFile
	doc.Find("table tbody tr").Each(func(i int, s *goquery.Selection) {
		fileType := strings.TrimSpace(s.Find("td").Eq(0).Text())
		extension := strings.TrimSpace(s.Find("td").Eq(1).Text())
		size := strings.TrimSpace(s.Find("td").Eq(2).Text())
		downloadURL, _ := s.Find("a").Attr("href")

		files = append(files, SampleFile{
			FileType:    fileType,
			Extension:   extension,
			Size:        size,
			DownloadURL: downloadURL,
		})
	})

	fmt.Println(files)
	return files, nil
}
