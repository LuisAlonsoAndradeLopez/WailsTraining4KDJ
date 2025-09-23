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

func (s *BookService) CreateBook(ctx context.Context, book *models.Book) error {
	return s.repo.CreateBook(ctx, book)
}

func (s *BookService) GetBooks(ctx context.Context) ([]models.Book, error) {
	return s.repo.GetBooks(ctx)
}

func (s *BookService) GetBookByID(ctx context.Context, id string) (*models.Book, error) {
	return s.repo.GetBookByID(ctx, id)
}

func (s *BookService) UpdateBook(ctx context.Context, id string, update map[string]interface{}) error {
	return s.repo.UpdateBook(ctx, id, update)
}

func (s *BookService) DeleteBook(ctx context.Context, id string) error {
	return s.repo.DeleteBook(ctx, id)
}
