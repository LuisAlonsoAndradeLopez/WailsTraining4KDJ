package db

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func ConnectDB() (*gorm.DB, error) {
	dataSourceName := "root:FechaDeInicio#28082025@tcp(127.0.0.1:3306)/mini_sistema_prueba_de_tecnologias?parseTime=true"
	database, err := gorm.Open(mysql.Open(dataSourceName), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("failed to open DB: %w", err)
	}

	fmt.Println("Connected to MySQL successfully!")
	return database, nil
}
