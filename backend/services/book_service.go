package services

import (
	"context"
	"wailstraining4kdj/backend/models"

	"go.mongodb.org/mongo-driver/bson"
)

type BookRepository interface {
	CreateBook(ctx context.Context, book *models.Book) error
	GetBooks(ctx context.Context) ([]models.Book, error)
	GetBookByID(ctx context.Context, id string) (*models.Book, error)
	UpdateBook(ctx context.Context, id string, update bson.M) error
	DeleteBook(ctx context.Context, id string) error
}

type BookService struct {
	repo BookRepository
}

func NewBookService(repo BookRepository) *BookService {
	return &BookService{repo: repo}
}

func (s *BookService) CreateBook(book *models.Book) error {
	return s.repo.CreateBook(context.Background(), book)
}

func (s *BookService) GetBooks() ([]models.Book, error) {
	return s.repo.GetBooks(context.Background())
}

func (s *BookService) GetBookByID(id string) (*models.Book, error) {
	return s.repo.GetBookByID(context.Background(), id)
}

func (s *BookService) UpdateBook(id string, update bson.M) error {
	return s.repo.UpdateBook(context.Background(), id, update)
}

func (s *BookService) DeleteBook(id string) error {
	return s.repo.DeleteBook(context.Background(), id)
}
