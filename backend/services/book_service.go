package services

import (
	"context"
	"time"

	"github.com/qiniu/qmgo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"wailstraining4kdj/backend/db"
	"wailstraining4kdj/backend/models"
)

type BookService struct {
	collection *qmgo.Collection
}

func NewBookService() *BookService {
	_, database, err := db.ConnectMongoDBDB()
	if err != nil {
		panic(err)
	}
	return &BookService{
		collection: database.Collection("Books"),
	}
}

func (s *BookService) CreateBook(book *models.Book) error {
	book.ID = primitive.NewObjectID()

	_, err := s.collection.InsertOne(context.Background(), book)
	return err
}

func (s *BookService) GetBooks() ([]models.Book, error) {
	var books []models.Book
	err := s.collection.Find(context.Background(), bson.M{}).All(&books)
	return books, err
}

func (s *BookService) GetBookByID(id string) (*models.Book, error) {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	var book models.Book
	err = s.collection.Find(context.Background(), bson.M{"_id": oid}).One(&book)
	return &book, err
}

func (s *BookService) UpdateBook(id string, update bson.M) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	update["updated_at"] = time.Now()
	return s.collection.UpdateId(context.Background(), oid, bson.M{"$set": update})
}

func (s *BookService) DeleteBook(id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	return s.collection.RemoveId(context.Background(), oid)
}
