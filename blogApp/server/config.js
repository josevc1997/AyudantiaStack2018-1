const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'ayudantia'
});
connection.connect(function(){
    console.log("Database Conectada");
});

module.exports = connection;
