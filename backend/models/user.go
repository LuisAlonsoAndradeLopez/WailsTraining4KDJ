package models

import "time"

type User struct {
	ID          uint      `gorm:"primaryKey;autoIncrement" json:"id"`
	Name        string    `gorm:"size:30" json:"name"`
	Surnames    string    `gorm:"size:30" json:"surnames"`
	BirthDate   time.Time `json:"birth_date"`
	PhoneNumber string    `gorm:"size:15" json:"phone_number"`
	Email       string    `gorm:"size:100" json:"email"`
}
