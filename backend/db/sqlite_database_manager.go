package db

import (
	"fmt"
	"os"
	"path/filepath"
	"wailstraining4kdj/backend/models"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

func InitSQLiteDB() (*gorm.DB, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return nil, fmt.Errorf("failed to get user config directory: %w", err)
	}

	dbDir := filepath.Join(configDir, "WailsTraining4KDJ", "databases")
	if err := os.MkdirAll(dbDir, os.ModePerm); err != nil {
		return nil, fmt.Errorf("failed to create database directory: %w", err)
	}

	dbPath := filepath.Join(dbDir, "sqlite_database.db")

	db, err := gorm.Open(sqlite.Open(dbPath), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	if err := db.AutoMigrate(&models.User{}); err != nil {
		return nil, fmt.Errorf("failed to migrate database: %w", err)
	}

	fmt.Println("Database ready at:", dbPath)
	return db, nil
}
