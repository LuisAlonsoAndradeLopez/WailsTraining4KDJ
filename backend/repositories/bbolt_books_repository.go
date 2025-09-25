package repositories

import (
	"context"
	"encoding/json"
	"fmt"

	bolt "go.etcd.io/bbolt"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"wailstraining4kdj/backend/models"
)

type BboltBookRepository struct {
	db *bolt.DB
}

func NewBboltBookRepository(db *bolt.DB) *BboltBookRepository {
	return &BboltBookRepository{db: db}
}

func (r *BboltBookRepository) CreateBook(ctx context.Context, book *models.Book) error {
	book.ID = primitive.NewObjectID()

	return r.db.Update(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Books"))
		data, err := json.Marshal(book)
		if err != nil {
			return err
		}
		return bucket.Put([]byte(book.ID.Hex()), data)
	})
}

func (r *BboltBookRepository) GetBooks(ctx context.Context) ([]models.Book, error) {
	var books []models.Book

	err := r.db.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Books"))
		return bucket.ForEach(func(_, v []byte) error {
			var b models.Book
			if err := json.Unmarshal(v, &b); err != nil {
				return err
			}
			books = append(books, b)
			return nil
		})
	})

	return books, err
}

func (r *BboltBookRepository) GetBookByID(ctx context.Context, id string) (*models.Book, error) {
	var book models.Book

	err := r.db.View(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Books"))
		data := bucket.Get([]byte(id))
		if data == nil {
			return fmt.Errorf("book not found")
		}
		return json.Unmarshal(data, &book)
	})

	return &book, err
}

func (r *BboltBookRepository) UpdateBook(ctx context.Context, id string, update bson.M) error {
	book, err := r.GetBookByID(ctx, id)
	if err != nil {
		return err
	}

	// Apply updates manually
	if title, ok := update["title"].(string); ok {
		book.Title = title
	}
	if author, ok := update["author"].(string); ok {
		book.Author = author
	}
	if pages, ok := update["pages"].(int); ok {
		book.Pages = pages
	}

	data, err := json.Marshal(book)
	if err != nil {
		return err
	}

	return r.db.Update(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Books"))
		return bucket.Put([]byte(id), data)
	})
}

func (r *BboltBookRepository) DeleteBook(ctx context.Context, id string) error {
	return r.db.Update(func(tx *bolt.Tx) error {
		bucket := tx.Bucket([]byte("Books"))
		return bucket.Delete([]byte(id))
	})
}
