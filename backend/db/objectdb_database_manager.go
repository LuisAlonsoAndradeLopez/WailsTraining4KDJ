package db

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/boonsuen/objectdb"
)

type ObjectDBManager struct {
	DB *objectdb.DB
}

func InitObjectDBDB() (*ObjectDBManager, error) {
	userDir, err := os.UserConfigDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get user config directory: %w", err)
	}

	dbDir := filepath.Join(userDir, "WailsTraining4KDJ", "databases")
	if err := os.MkdirAll(dbDir, os.ModePerm); err != nil {
		return nil, fmt.Errorf("failed to create database directory: %w", err)
	}

	dbPath := filepath.Join(dbDir, "objectdb")

	db, err := objectdb.Open(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open ObjectDB: %w", err)
	}

	fmt.Println("ObjectDB ready at:", dbPath)
	return &ObjectDBManager{DB: db}, nil
}

func (m *ObjectDBManager) Close() {
	if err := m.DB.Close(); err != nil {
		fmt.Println("error closing ObjectDB:", err)
	}
}
