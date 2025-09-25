package db

import (
	"fmt"
	"os"
	"path/filepath"

	bolt "go.etcd.io/bbolt"
)

func InitBboltDB() (*bolt.DB, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return nil, fmt.Errorf("cannot get user config dir: %w", err)
	}

	dbDir := filepath.Join(configDir, "WailsTraining4KDJ", "databases")
	if err := os.MkdirAll(dbDir, os.ModePerm); err != nil {
		return nil, fmt.Errorf("cannot create database directory: %w", err)
	}

	dbPath := filepath.Join(dbDir, "bbolt_database.db")

	db, err := bolt.Open(dbPath, 0600, nil)
	if err != nil {
		return nil, fmt.Errorf("cannot open bbolt db: %w", err)
	}

	err = db.Update(func(tx *bolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists([]byte("Books"))
		return err
	})

	return db, err
}
