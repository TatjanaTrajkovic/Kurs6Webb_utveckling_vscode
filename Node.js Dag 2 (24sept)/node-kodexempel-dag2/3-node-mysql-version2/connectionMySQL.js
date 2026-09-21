const mysql = require('mysql2');
const connectionMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'node1234',
    database: 'demoNode20260917'
});

module.exports = connectionMySQL;