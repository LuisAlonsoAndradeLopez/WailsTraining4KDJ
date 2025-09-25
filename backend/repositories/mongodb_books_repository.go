package repositories

import (
	"context"

	"wailstraining4kdj/backend/models"

	"github.com/qiniu/qmgo"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MongoBookRepository struct {
	collection *qmgo.Collection
}

func NewMongoBookRepository(db *qmgo.Database) *MongoBookRepository {
	return &MongoBookRepository{
		collection: db.Collection("Books"),
	}
}

func (r *MongoBookRepository) CreateBook(ctx context.Context, book *models.Book) error {
	book.ID = primitive.NewObjectID()
	_, err := r.collection.InsertOne(ctx, book)
	return err
}

func (r *MongoBookRepository) GetBooks(ctx context.Context) ([]models.Book, error) {
	var books []models.Book
	err := r.collection.Find(ctx, bson.M{}).All(&books)
	return books, err
}

func (r *MongoBookRepository) GetBookByID(ctx context.Context, id string) (*models.Book, error) {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	var book models.Book
	err = r.collection.Find(ctx, bson.M{"_id": oid}).One(&book)
	return &book, err
}

func (r *MongoBookRepository) UpdateBook(ctx context.Context, id string, update bson.M) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	return r.collection.UpdateId(ctx, oid, bson.M{"$set": update})
}

func (r *MongoBookRepository) DeleteBook(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	return r.collection.RemoveId(ctx, oid)
}
