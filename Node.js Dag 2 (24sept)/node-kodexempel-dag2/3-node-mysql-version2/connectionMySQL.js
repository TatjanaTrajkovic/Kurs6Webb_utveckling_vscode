const mysql = require('mysql2');
const connectionMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ditt lösenord',
    database: 'din databas'
});

module.exports = connectionMySQL;