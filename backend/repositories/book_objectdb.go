package repositories

import (
	"context"
	"encoding/json"
	"errors"

	bolt "go.etcd.io/bbolt"
	"go.mongodb.org/mongo-driver/bson/primitive"

	"wailstraining4kdj/backend/models"
)

type ObjectDBBookRepository struct {
	db *bolt.DB
}

func NewObjectDBBookRepository(db *bolt.DB) *ObjectDBBookRepository {
	// Ensure "Books" bucket exists
	db.Update(func(tx *bolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists([]byte("Books"))
		return err
	})
	return &ObjectDBBookRepository{db: db}
}

func (r *ObjectDBBookRepository) CreateBook(ctx context.Context, book *models.Book) error {
	book.ID = primitive.NewObjectID()
	data, err := json.Marshal(book)
	if err != nil {
		return err
	}

	return r.db.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Books"))
		return b.Put([]byte(book.ID.Hex()), data)
	})
}

func (r *ObjectDBBookRepository) GetBooks(ctx context.Context) ([]models.Book, error) {
	var books []models.Book
	err := r.db.View(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Books"))
		return b.ForEach(func(_, v []byte) error {
			var book models.Book
			if err := json.Unmarshal(v, &book); err != nil {
				return err
			}
			books = append(books, book)
			return nil
		})
	})
	return books, err
}

func (r *ObjectDBBookRepository) GetBookByID(ctx context.Context, id string) (*models.Book, error) {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	var book models.Book
	err = r.db.View(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Books"))
		data := b.Get([]byte(oid.Hex()))
		if data == nil {
			return nil
		}
		return json.Unmarshal(data, &book)
	})
	return &book, err
}

func (r *ObjectDBBookRepository) UpdateBook(ctx context.Context, id string, update map[string]interface{}) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	return r.db.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Books"))
		data := b.Get([]byte(oid.Hex()))
		if data == nil {
			return errors.New("book not found")
		}

		var book map[string]interface{}
		if err := json.Unmarshal(data, &book); err != nil {
			return err
		}

		for k, v := range update {
			book[k] = v
		}

		newData, err := json.Marshal(book)
		if err != nil {
			return err
		}
		return b.Put([]byte(oid.Hex()), newData)
	})
}

func (r *ObjectDBBookRepository) DeleteBook(ctx context.Context, id string) error {
	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}
	return r.db.Update(func(tx *bolt.Tx) error {
		b := tx.Bucket([]byte("Books"))
		return b.Delete([]byte(oid.Hex()))
	})
}
