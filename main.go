package main

import (
	"context"
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/runtime"

	"mini-sistema-prueba-de-tecnologias/backend"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app st	ructure
	app := backend.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "mini-sistema-prueba-de-tecnologias",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		Bind: []interface{}{
			app,
			app.UserService,
		},
		OnStartup: func(ctx context.Context) {
			runtime.WindowMaximise(ctx)
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
