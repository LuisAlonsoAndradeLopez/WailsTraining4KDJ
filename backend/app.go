package backend

import (
	"context"

	"wailstraining4kdj/backend/db"
	"wailstraining4kdj/backend/services"
)

type App struct {
	ctx context.Context

	RestService *services.RestService
	SoapService *services.SoapService
	UserService *services.UserService
}

func NewApp() *App {
	database, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}

	return &App{
		RestService: services.NewRestService(),
		SoapService: services.NewSoapService(
			"https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL",
		),
		UserService: services.NewUserService(database),
	}
}

func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}
