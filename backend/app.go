package backend

import (
	"context"

	"mini-sistema-prueba-de-tecnologias/backend/db"
	"mini-sistema-prueba-de-tecnologias/backend/services"
)

type App struct {
	ctx context.Context

	UserService *services.UserService
	SoapService *services.SoapService
}

func NewApp() *App {
	database, err := db.ConnectDB()
	if err != nil {
		panic(err)
	}

	return &App{
		UserService: services.NewUserService(database),
		SoapService: services.NewSoapService(
			"https://www.dataaccess.com/webservicesserver/numberconversion.wso?WSDL",
		),
	}
}

func (a *App) Startup(ctx context.Context) {
	a.ctx = ctx
}
