package backend

import (
	"context"
	"fmt"
	"os"

	"wailstraining4kdj/backend/db"
	"wailstraining4kdj/backend/repositories"
	"wailstraining4kdj/backend/services"
)

type App struct {
	ctx context.Context

	BookService                          *services.BookService
	RestService                          *services.RestService
	SoapService                          *services.SoapService
	UserService                          *services.UserService
	JsonDataSerializerAndStoragerService *services.JsonDataSerializerAndStoragerService
}

func NewApp() *App {
	//Change the commented code and comment depending which database you wanna use

	//mysqlDatabase, err := db.ConnectMySQLDB()
	//if err != nil {
	//	panic(err)
	//}

	sqliteDatabase, err := db.InitSQLiteDB()
	if err != nil {
		fmt.Println("Failed to initialize database:", err)
		os.Exit(1)
	}

	//mongodbDatabase, err := db.ConnectMongoDBDB()
	//if err != nil {
	//	fmt.Println("Failed to connect MongoDB:", err)
	//	os.Exit(1)
	//}

	bboltDatabase, err := db.InitBboltDB()
	if err != nil {
		fmt.Println("Failed to initialize Bbolt DB:", err)
		os.Exit(1)
	}

	//bookRepoWithMongodb := repositories.NewMongoBookRepository(mongodbDatabase)
	bookRepoWithBbolt := repositories.NewBboltBookRepository(bboltDatabase)

	return &App{

		//BookService: services.NewBookService(bookRepoWithMongodb),
		BookService:                          services.NewBookService(bookRepoWithBbolt),
		JsonDataSerializerAndStoragerService: services.NewJsonDataSerializerAndStoragerService(bboltDatabase),
		RestService:                          services.NewRestService(),
		SoapService: services.NewSoapService(
			"https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL",
		),
		//UserService: services.NewUserService(mysqlDatabase),
		UserService: services.NewUserService(sqliteDatabase),
	}
}

func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
	a.JsonDataSerializerAndStoragerService.SetContext(ctx)
}
