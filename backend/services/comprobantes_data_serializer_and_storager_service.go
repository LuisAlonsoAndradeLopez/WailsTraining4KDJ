package services

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"sync"

	runtime "runtime"

	wailsRuntime "github.com/wailsapp/wails/v2/pkg/runtime"
	bolt "go.etcd.io/bbolt"

	"github.com/SaulEnriqueMR/kore-models/models/comprobante"
)

type ComprobantesDataSerializerAndStoragerService struct {
	bboltDb     *bolt.DB
	downloadDir string
	ctx         context.Context
}

func NewComprobantesDataSerializerAndStoragerService(db *bolt.DB) *ComprobantesDataSerializerAndStoragerService {
	defaultDir, _ := os.UserHomeDir()

	ncdsass := &ComprobantesDataSerializerAndStoragerService{
		bboltDb:     db,
		downloadDir: filepath.Join(defaultDir, "Downloads"),
	}
	return ncdsass
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (cdsass *ComprobantesDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	cdsass.ctx = ctx
}

func getComprobantesXmlFilesPaths() ([]string, error) {
	rootPath := "C:/Users/wmike/Documents/Nobeno Zemeztre/Prrrrrrrrrrrrácticas de Ingeniebría de Software/2025"

	var xmlPaths []string
	err := filepath.WalkDir(rootPath, func(path string, d os.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".xml" {
			xmlPaths = append(xmlPaths, path)
		}
		return nil
	})
	if err != nil {
		return nil, fmt.Errorf("walkdir failed: %w", err)
	}

	return xmlPaths, err
}

// Functions for use in ComprobanteDataSerializerAndStorager.vue
func (cdsass *ComprobantesDataSerializerAndStoragerService) FetchAvailableComprobantes() ([]any, error) {
	xmlPaths, _ := getComprobantesXmlFilesPaths()
	numWorkers := runtime.NumCPU() * 2

	jobs := make(chan string, len(xmlPaths))
	var mu sync.Mutex
	var comprobantes []any
	var allErrs []string

	var wg sync.WaitGroup
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for path := range jobs {
				data, err := os.ReadFile(path)
				if err != nil {
					mu.Lock()
					allErrs = append(allErrs, fmt.Sprintf("read %s: %v", path, err))
					mu.Unlock()
					continue
				}

				comp, err := comprobante.SerializeComprobanteFromXml(data)
				if err != nil {
					mu.Lock()
					allErrs = append(allErrs, fmt.Sprintf("parse %s: %v", path, err))
					mu.Unlock()
					continue
				}

				var selectedComp any
				switch {
				case comp.Comprobante40 != nil:
					selectedComp = comp.Comprobante40
				case comp.Comprobante33 != nil:
					selectedComp = comp.Comprobante33
				case comp.Comprobante32 != nil:
					selectedComp = comp.Comprobante32
				default:
					mu.Lock()
					allErrs = append(allErrs, fmt.Sprintf("no Comprobante version in %s", path))
					mu.Unlock()
					continue
				}

				jsonBytes, err := json.Marshal(selectedComp)
				if err != nil {
					mu.Lock()
					allErrs = append(allErrs, fmt.Sprintf("marshal %s: %v", path, err))
					mu.Unlock()
					continue
				}

				var jsonMap map[string]any
				if err := json.Unmarshal(jsonBytes, &jsonMap); err != nil {
					mu.Lock()
					allErrs = append(allErrs, fmt.Sprintf("unmarshal %s: %v", path, err))
					mu.Unlock()
					continue
				}

				delete(jsonMap, "KuantikMetadata")
				delete(jsonMap, "ProcessorMetadata")

				mu.Lock()
				comprobantes = append(comprobantes, jsonMap)
				mu.Unlock()
			}
		}()
	}

	// Send jobs
	for _, path := range xmlPaths {
		jobs <- path
	}
	close(jobs)

	// Wait for all workers
	wg.Wait()

	if len(allErrs) > 0 {
		return comprobantes, fmt.Errorf("some errors occurred: %s", strings.Join(allErrs, "; "))
	}

	return comprobantes, nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) FetchStoragedComprobantes() ([]map[string]any, error) {
	var comprobantes []map[string]any

	err := cdsass.bboltDb.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Comprobantes"))
		if bucket == nil {
			return nil
		}

		return bucket.ForEach(func(_, comprobanteInBytes []byte) error {
			if len(comprobanteInBytes) == 0 {
				return nil
			}

			var comp map[string]any
			if err := json.Unmarshal(comprobanteInBytes, &comp); err != nil {
				// log error but continue
				fmt.Printf("Failed to unmarshal stored comprobante JSON: %v\n", err)
				return nil
			}

			comprobantes = append(comprobantes, comp)
			return nil
		})
	})

	return comprobantes, err
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) SelectComprobantesDownloadsDirectory() (string, error) {
	selection, err := wailsRuntime.OpenDirectoryDialog(cdsass.ctx, wailsRuntime.OpenDialogOptions{
		Title: "Select Downloads Directory",
	})
	if err != nil {
		return "", err
	}

	cdsass.downloadDir = selection
	return selection, nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) StorageAllAvailableComprobantes(comprobantes []map[string]any) error {
	if len(comprobantes) == 0 {
		return nil
	}

	err := cdsass.bboltDb.Batch(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists([]byte("Comprobantes"))
		if err != nil {
			return fmt.Errorf("bucket creation failed: %w", err)
		}

		for _, c := range comprobantes {
			comprobanteInBytes, err := json.Marshal(c)
			if err != nil {
				return fmt.Errorf("marshal failed: %w", err)
			}

			uuid := c["Uuid"].(string)

			if uuid == "" {
				return fmt.Errorf("uuid is empty for comprobante")
			}

			if err := b.Put([]byte(uuid), comprobanteInBytes); err != nil {
				return fmt.Errorf("write failed for UUID %s: %w", uuid, err)
			}
		}

		return nil
	})

	if err != nil {
		return fmt.Errorf("batch storage failed: %w", err)
	}

	return nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) DeleteAllStoragedComprobantes(comprobantes []map[string]any) error {
	if len(comprobantes) == 0 {
		return nil
	}

	err := cdsass.bboltDb.Batch(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Comprobantes"))
		if b == nil {
			return fmt.Errorf("bucket 'Comprobantes' does not exist")
		}

		for _, c := range comprobantes {
			uuid := c["Uuid"].(string)

			if uuid == "" {
				continue
			}

			if b.Get([]byte(uuid)) == nil {
				continue
			}

			if err := b.Delete([]byte(uuid)); err != nil {
				return fmt.Errorf("delete failed for UUID %s: %w", uuid, err)
			}
		}

		return nil
	})

	if err != nil {
		return fmt.Errorf("batch delete failed: %w", err)
	}

	return nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) DownloadAllAvailableComprobantes() error {
	xmlPaths, err := getComprobantesXmlFilesPaths()
	if err != nil {
		return fmt.Errorf("failed to get XML paths: %w", err)
	}

	destDir := filepath.Join(cdsass.downloadDir, "Comprobantes")
	if err := os.MkdirAll(destDir, os.ModePerm); err != nil {
		return fmt.Errorf("failed to create destination folder: %w", err)
	}

	numWorkers := runtime.NumCPU() * 2
	jobs := make(chan string, numWorkers*2)
	errs := make(chan error, numWorkers*2)

	var wg sync.WaitGroup

	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for srcPath := range jobs {
				data, err := os.ReadFile(srcPath)
				if err != nil {
					select {
					case errs <- fmt.Errorf("read %s: %w", srcPath, err):
					default:
					}
					continue
				}
				bytesDataToComprobante, _ := comprobante.SerializeComprobanteFromXml(data)
				var basePath string

				switch {
				case bytesDataToComprobante.Comprobante40 != nil:
					basePath = bytesDataToComprobante.Comprobante40.GetFileName()
				case bytesDataToComprobante.Comprobante33 != nil:
					basePath = bytesDataToComprobante.Comprobante33.GetFileName()
				case bytesDataToComprobante.Comprobante32 != nil:
					basePath = bytesDataToComprobante.Comprobante32.GetFileName()
				default:
					fmt.Errorf("no Comprobante version present (Comprobante32/33/40 missing)")
				}

				destPath := filepath.Join(destDir, basePath)

				if err := os.MkdirAll(filepath.Dir(destPath), os.ModePerm); err != nil {
					select {
					case errs <- fmt.Errorf("failed to create directories for %s: %w", destPath, err):
					default:
					}
					continue
				}

				if err := os.WriteFile(destPath, data, 0644); err != nil {
					select {
					case errs <- fmt.Errorf("write %s: %w", destPath, err):
					default:
					}
					continue
				}
			}
		}()
	}

	go func() {
		for _, path := range xmlPaths {
			jobs <- path
		}
		close(jobs)
	}()

	go func() {
		wg.Wait()
		close(errs)
	}()

	var allErrs []string
	for e := range errs {
		allErrs = append(allErrs, e.Error())
	}

	if len(allErrs) > 0 {
		return fmt.Errorf("some errors occurred: %s", strings.Join(allErrs, "; "))
	}

	return nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) StorageAvailableComprobante(c map[string]any) error {
	comprobanteInBytes, err := json.Marshal(c)
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	uuid := c["Uuid"].(string)

	if uuid == "" {
		return fmt.Errorf("uuid is empty for comprobante")
	}

	err = cdsass.bboltDb.Update(func(tx *bolt.Tx) error {
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

func (cdsass *ComprobantesDataSerializerAndStoragerService) DeleteStoragedComprobante(c map[string]any) error {
	uuid := c["Uuid"].(string)

	err := cdsass.bboltDb.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Comprobantes"))
		if b == nil {
			return fmt.Errorf("bucket 'Comprobantes' does not exist")
		}

		if b.Get([]byte(uuid)) == nil {
			return fmt.Errorf("no record found with UUID: %s", uuid)
		}

		return b.Delete([]byte(uuid))
	})
	if err != nil {
		return fmt.Errorf("delete failed: %w", err)
	}

	return nil
}
