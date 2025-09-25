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
go get go.mongodb.org/mongo-driver/mongo
go get github.com/qiniu/qmgo
go get gorm.io/driver/sqlite
go get github.com/glebarez/sqlite
go get go.etcd.io/bbolt@latest
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
Para poder crear el instalador, unicamente se tiene que ejecutar este comando:
```bash
wails build -nsis
```
Una vez ejecutado, el instalador aparecerá en la carpeta build\bin
