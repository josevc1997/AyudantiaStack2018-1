# AyudantiaStackAnalisis

Pequeño Blog de ejemplo para la ayudantía del
ramo Análisis y Diseño de Software, utilizando Angular + NodeJs.

## Stack Utilizado
- NodeJs _*v*8.10.0_
- ExpressJs _*v*4.16.3_
- Angular CLI _*v*1.7.3_
- Mysql _*v*4.7.12_

## Instrucciones de Ejecución
- Importa la base de datos (archivo bd.sql)
- Crea un archivo llamado *config.js* en /blogApp/server con el siguiente contenido, colocando las credenciales de tu instancia local de Mysql.

~~~
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '[user]',
    password: '[password]',
    database: 'ayudantia'
});

connection.connect(function(){
    console.log("Database Conectada");
});

module.exports = connection;
~~~
- Instala los paquetes vía terminal con el siguiente comando

~~~
npm install
~~~
- Ejecuta la aplicación con el siguiente comando

~~~
ng build && node server
~~~
