// TODO: Fix the last 4 functions of storage and delete comprobantes
package services

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"sync"

	bolt "go.etcd.io/bbolt"

	"github.com/SaulEnriqueMR/kore-models/models/comprobante"
)

type ComprobantesDataSerializerAndStoragerService struct {
	bboltDb *bolt.DB
	ctx     context.Context
}

func NewComprobantesDataSerializerAndStoragerService(db *bolt.DB) *ComprobantesDataSerializerAndStoragerService {
	s := &ComprobantesDataSerializerAndStoragerService{
		bboltDb: db,
	}
	return s
}

// Auxiliary fuctions
// This function is only for use in app.go file
func (cdsass *ComprobantesDataSerializerAndStoragerService) SetContext(ctx context.Context) {
	cdsass.ctx = ctx
}

// Functions for use in ComprobanteDataSerializerAndStorager.vue
func (cdsass *ComprobantesDataSerializerAndStoragerService) FetchAvailableComprobantes() ([]comprobante.Comprobante, error) {
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

	numWorkers := runtime.NumCPU() * 2

	jobs := make(chan string, numWorkers*2)
	results := make(chan comprobante.Comprobante, numWorkers*2)
	errs := make(chan error, numWorkers*2)

	var wg sync.WaitGroup

	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for path := range jobs {
				data, err := os.ReadFile(path)
				if err != nil {
					select {
					case errs <- fmt.Errorf("read %s: %w", path, err):
					default:
					}
					continue
				}

				comp, err := comprobante.SerializeComprobanteFromXml(data)
				if err != nil {
					select {
					case errs <- fmt.Errorf("parse %s: %w", path, err):
					default:
					}
					continue
				}

				select {
				case results <- comp:
				default:
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
		close(results)
		close(errs)
	}()

	var comprobantes []comprobante.Comprobante
	for r := range results {
		comprobantes = append(comprobantes, r)
	}

	var allErrs []string
	for e := range errs {
		allErrs = append(allErrs, e.Error())
	}

	if len(allErrs) > 0 {
		return comprobantes, fmt.Errorf("some errors occurred: %s", strings.Join(allErrs, "; "))
	}

	return comprobantes, nil
}

func (cdsass *ComprobantesDataSerializerAndStoragerService) FetchStoragedComprobantes() ([]comprobante.Comprobante, error) {
	var comprobantes []comprobante.Comprobante

	err := cdsass.bboltDb.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Comprobantes"))
		if bucket == nil {
			return nil // no bucket yet
		}

		return bucket.ForEach(func(_, comprobanteInBytes []byte) error {
			if len(comprobanteInBytes) == 0 {
				return nil
			}

			var comp comprobante.Comprobante
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

func (s *ComprobantesDataSerializerAndStoragerService) StorageAllAvailableComprobantes(comprobantes []comprobante.Comprobante) error {
	if len(comprobantes) == 0 {
		return nil
	}

	err := s.bboltDb.Batch(func(tx *bolt.Tx) error {
		b, err := tx.CreateBucketIfNotExists([]byte("Comprobantes"))
		if err != nil {
			return fmt.Errorf("bucket creation failed: %w", err)
		}

		for _, c := range comprobantes {
			comprobanteInBytes, err := json.Marshal(c)
			if err != nil {
				return fmt.Errorf("marshal failed: %w", err)
			}

			var uuid string
			switch {
			case c.Comprobante40 != nil:
				uuid = c.Comprobante40.Uuid
			case c.Comprobante33 != nil:
				uuid = c.Comprobante33.Uuid
			case c.Comprobante32 != nil:
				uuid = c.Comprobante32.Uuid
			default:
				return fmt.Errorf("no Comprobante version present (Comprobante32/33/40 missing)")
			}

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

func (s *ComprobantesDataSerializerAndStoragerService) DeleteAllStoragedComprobantes(comprobantes []comprobante.Comprobante) error {
	if len(comprobantes) == 0 {
		return nil
	}

	err := s.bboltDb.Batch(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Comprobantes"))
		if b == nil {
			return fmt.Errorf("bucket 'Comprobantes' does not exist")
		}

		for _, c := range comprobantes {
			var uuid string
			switch {
			case c.Comprobante40 != nil:
				uuid = c.Comprobante40.Uuid
			case c.Comprobante33 != nil:
				uuid = c.Comprobante33.Uuid
			case c.Comprobante32 != nil:
				uuid = c.Comprobante32.Uuid
			default:
				return fmt.Errorf("no Comprobante version present (Comprobante32/33/40 missing)")
			}

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

func (s *ComprobantesDataSerializerAndStoragerService) StorageAvailableComprobante(c comprobante.Comprobante) error {
	comprobanteInBytes, err := json.Marshal(c)
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	var uuid string
	switch {
	case c.Comprobante40 != nil:
		uuid = c.Comprobante40.Uuid
	case c.Comprobante33 != nil:
		uuid = c.Comprobante33.Uuid
	case c.Comprobante32 != nil:
		uuid = c.Comprobante32.Uuid
	default:
		return fmt.Errorf("no Comprobante version present (Comprobante32/33/40 missing)")
	}

	if uuid == "" {
		return fmt.Errorf("uuid is empty for comprobante")
	}

	err = s.bboltDb.Update(func(tx *bolt.Tx) error {
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

func (cdsass *ComprobantesDataSerializerAndStoragerService) DeleteStoragedComprobante(c comprobante.Comprobante) error {
	var uuid string
	switch {
	case c.Comprobante40 != nil:
		uuid = c.Comprobante40.Uuid
	case c.Comprobante33 != nil:
		uuid = c.Comprobante33.Uuid
	case c.Comprobante32 != nil:
		uuid = c.Comprobante32.Uuid
	default:
		return fmt.Errorf("no Comprobante version present (Comprobante32/33/40 missing)")
	}

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
