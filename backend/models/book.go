package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Book struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Title       string             `bson:"title" json:"title"`
	Author      string             `bson:"author" json:"author"`
	PublishedAt time.Time          `bson:"published_at" json:"published_at"`
	Pages       int                `bson:"pages" json:"pages"`
}
