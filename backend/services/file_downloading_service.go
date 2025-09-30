package services

import (
	"context"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/wailsapp/wails/v2/pkg/runtime"

	"wailstraining4kdj/backend/auxiliary"
)

type SampleFile struct {
	FileType    string `json:"fileType"`
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
			var fileType, size, downloadURL string

			s.Find("td").Each(func(j int, td *goquery.Selection) {
				text := strings.TrimSpace(td.Text())

				if strings.Contains(strings.ToUpper(text), "MB") || strings.Contains(strings.ToUpper(text), "KB") {
					size = text
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
					Size:        size,
					DownloadURL: downloadURL,
				})
			}
		})
	}

	return allFiles, nil
}
