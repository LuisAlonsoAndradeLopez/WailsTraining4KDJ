# WailsTraining4KDJ
Este es un sistema de entrenamiento para la materia de Practicazas de Injenyerya de Softwer, ocupa Wails, Go y Vue.js.

## Poder jalarlo
Para poder arrancar este sistema primero tienes que ejecutar estos comandos:

En la carpeta raíz:
```bash
go get gorm.io/gorm@v1.30.2
go get gorm.io/driver/mysql@v1.6.0
go get siteminds.dev/gosoap@latest
go get github.com/go-resty/resty/v2
```

En la carpeta "frontend"
```bash
npm install bootstrap
npm install bootstrap-icons
npm install bootstrap-vue-3
npm install vue-router@4
npm install sweetalert2
```

## Poder crear el instalador
Para poder crear el instalador, primero tienes que instalar depencencias, las cuales se instalan con los comandos siguientes:
```bash
npm install --save-dev electron-builder
```

Ya una vez que estén ejecutados esos comandos que instalan dependencias, deberás ejecutar los siguientes para poder crear el instalador
```bash
cd packager
```
```bash
npm run dist
```
