
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

function getBooks(){
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM bok'; //hämtar alla böcker och kolumner från tabellen bok

        connectionMySQL.query(sql, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        })
    })
}

app.get('/api/books', async (req, res) => { //tar emot en get request när någon besöker /api/books
    try{
        const books = await getBooks(); //väntar på att vår funktion ska hämta böcker från MySQL
        res.json({books}); //skickar tillbaka böckerna som JSON
    }catch(error){//fångar upp ev fel och skickar felmeddelande
        return res.status(500).json({
            error: error.message
        });
    }
})

function getBook(id){
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM bok WHERE bokId = ?';

        connectionMySQL.query(sql, [id], (err, rows) => {
            if(err){
                reject(err);
            }else{
                resolve(rows)
            }
        })
    })
}

app.get('/api/books/:id', async (req, res) => {
    const { id } = req.params;

    console.log('param ' + id)

    try{
        const bok = await getBook(id);
        res.json({ bok });
    }catch(error){
        return res.status(500).json(
        {
            error: error.message
        }
        )
    }
})

function createBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId){
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO bok (bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId) VALUES (?, ?, ?, ?, ?)';

        let params = [
            bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId
        ];

        connectionMySQL.query(sql, params, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        })
    })
}

app.post('/api/books', async (req, res) => { //tar emot post request för att lägga till en ny bok
    const {
        bokForfattare,
        bokTitel,
        bokIsbn,
        bokPris,
        bokKategoriId
    } = req.body;//hämtar informationen som clienten skickar , tex titel, forfattare och ISBN

    if (!bokIsbn || bokIsbn.trim().length < 1) { //kollar att användaren har angett ett isbn
        return res.status(400).json({
            success: false,
            error: 'Du har inte skrivit in något ISBN för boken'
        });
    }

    try {
        await createBook( //väntar att den nya boken ska sparas i MySQL
            bokForfattare,
            bokTitel,
            bokIsbn,
            bokPris,
            bokKategoriId
        );

        return res.status(201).json({ //skickar ett svar som talar om att boken har skapats
            success: true,
            error: '',
            message: 'Du har lagt till en ny bok!'
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

function updateBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId, bokId) {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE bok SET bokForfattare = ?, bokTitel = ?, bokIsbn = ?, bokPris = ?, bokKategoriId = ? WHERE bokId = ?';

        let params = [
            bokForfattare,
            bokTitel,
            bokIsbn,
            bokPris,
            bokKategoriId,
            bokId
        ];

        connectionMySQL.query(sql, params, (err) => {
            if (err)
                reject(err);
            else
                resolve();
        });
    });
}