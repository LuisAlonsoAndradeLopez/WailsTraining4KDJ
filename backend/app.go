package backend

import (
	"context"
	"fmt"
	"os"

	"wailstraining4kdj/backend/db"
	"wailstraining4kdj/backend/services"
)

type App struct {
	ctx context.Context

	BookService *services.BookService
	RestService *services.RestService
	SoapService *services.SoapService
	UserService *services.UserService
}

func NewApp() *App {
	//mysql_database, err := db.ConnectMySQLDB()
	//if err != nil {
	//	panic(err)
	//}

	sqlite_database, err := db.InitDB()
	if err != nil {
		fmt.Println("Failed to initialize database:", err)
		os.Exit(1)
	}

	return &App{

		BookService: services.NewBookService(),
		RestService: services.NewRestService(),
		SoapService: services.NewSoapService(
			"https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL",
		),
		UserService: services.NewUserService(sqlite_database),
	}
}

func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}
