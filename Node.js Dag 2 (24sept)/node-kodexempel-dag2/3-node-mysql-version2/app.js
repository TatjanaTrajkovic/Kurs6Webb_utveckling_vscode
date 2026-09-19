const express = require('express');
const app = express();
const cors = require('cors');

const connectionMySQL = require('./connectionMySQL')

// Parse JSON bodies
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('public'));
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getBooks() {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM bok';
        connectionMySQL.query(sql, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function getBook(id) {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM bok WHERE bokId = ?';
        connectionMySQL.query(sql, [id], (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

function createBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId) {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO bok (bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId) VALUES (?,?,?,?,?)';
        let params = [bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId];

        connectionMySQL.query(sql, params, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function updateBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId, bokId) {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE bok SET bokForfattare = ?, bokTitel = ?, bokIsbn = ?, bokPris = ?, bokKategoriId = ? WHERE bokId = ?';
        let params = [bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId, bokId];

        connectionMySQL.query(sql, params, (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function deleteBook(id) {
    return new Promise((resolve, reject) => {
        let sql = 'DELETE FROM bok WHERE bokId = ?';

        connectionMySQL.query(sql, [id], (err) => {
            if(err)
                reject(err);
            else
                resolve();
        });
    });
}

function getBooksCategories() {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT * FROM kategori INNER JOIN bok ON kategori.kategoriId = bok.bokKategoriId'
        connectionMySQL.query(sql, (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
}

app.get('/api/books', async(req, res) => {
    try {
        const books = await getBooks();
        res.json({books});
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
});

app.get('/api/books/:id', async(req, res) => {
    const { id } = req.params;
    console.log('param' + id);

    try {
        const book = await getBook(id);
        res.json({book});
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
});

app.post('/api/books', async(req, res) => {
    const { bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId } = req.body;

    if (!bokIsbn || bokIsbn.trim().length < 1) {
        return res.status(400).json({
            success: false,
            error: 'Du har inte skrivit in något ISBN för boken',
        });
    }

    try{
        await createBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId);
        return res.status(201).json({
            success: true,
            error: '',
            message: 'Du har lagt till en ny bok!'
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.put('/api/books', async(req, res) => {
    const { bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId, bokId } = req.body;

    if (!bokIsbn || bokIsbn.trim().length < 1) {
        return res.status(400).json({
            success: false,
            error: 'Du har inte skrivit in något ISBN för boken',
        });
    }

    if (!bokId) {
        return res.status(400).json({
            success: false,
            error: 'Du har inte skrivit in något ID för boken du ska uppdatera!',
        });
    }

    try{
        await updateBook(bokForfattare, bokTitel, bokIsbn, bokPris, bokKategoriId, bokId);
        return res.status(201).json({
            success: true,
            error: ''
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.delete('/api/books/:id', async(req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            error: 'Du har inte skrivit in något ID för boken du ska radera!',
        });
    }

    try{
        await deleteBook(id);
        return res.status(201).json({
            success: true,
            error: '',
            message: 'Boken är nu raderad!'
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.get('/api/books-categories', async(req, res) => {
    try{
        const books = await getBooksCategories();
        res.json({books});
    }catch(error){
        return res.status(500).json({
            error: error.message
        });
    }
});
