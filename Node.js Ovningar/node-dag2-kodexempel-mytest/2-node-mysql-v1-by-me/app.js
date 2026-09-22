
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

const connectionMySQL = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'node1234',
    database: 'dag2mysql'
});

app.use(express.json());//express.json() läser json som skickas från frontend och omvadlar den till ett javascript objekt som vi kan komma åt med req.body
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('public'));//gör att webbläsaren kan komma åt filerna i vår public mapp via express servern

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
