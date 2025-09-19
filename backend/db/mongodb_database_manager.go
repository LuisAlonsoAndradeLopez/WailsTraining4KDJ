package db

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/qiniu/qmgo"
)

func ConnectMongoDBDB() (*qmgo.Client, *qmgo.Database, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := qmgo.NewClient(ctx, &qmgo.Config{
		Uri:      "mongodb://localhost:27017",
		Database: "WailsTraining4KDJ",
	})
	if err != nil {
		return nil, nil, fmt.Errorf("failed to connect to MongoDB: %w", err)
	}

	db := client.Database("WailsTraining4KDJ")
	log.Println("Connected to MongoDB successfully!")

	return client, db, nil
}
