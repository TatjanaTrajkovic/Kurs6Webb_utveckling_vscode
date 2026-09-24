const express = require('express')
const app = express()
const cors = require('cors')


const connectionMySQL = require('./connectionMySQL')



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


app.put('/api/books', async (req, res) => {
    const {
        bokId,
        bokForfattare,
        bokTitel,
        bokIsbn,
        bokPris,
        bokKategoriId
    } = req.body;

    try {
        await updateBook(
            bokForfattare,
            bokTitel,
            bokIsbn,
            bokPris,
            bokKategoriId,
            bokId
        );

        res.json({
            success: true,
            message: 'Boken har uppdaterats!'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

function deleteBook(id) {
    return new Promise((resolve, reject) => {

        let sql = 'DELETE FROM bok WHERE bokId = ?';

        connectionMySQL.query(sql, [id], (err, result) => {//[id] skickar ID-värdet till frågetecknet i SQL-frågan, så att MySQL vet vilken bok vi vill ta bort.
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}
//detta är sista delen av CRUD, DELETE endpointen.
app.delete('/api/books/:id', async (req, res) => {

    const { id } = req.params; //req.params hämtar värden från URL:en, exempelvis ID 4 i /api/books/4.

    try {
        const result = await deleteBook(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Boken finns inte!'
            });
        }

        res.json({
            success: true,
            message: 'Boken har tagits bort!'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 1. Klienten skickar en DELETE-request
//    Exempel: DELETE /api/books/4

// 2. Express hämtar ID-numret
//    const { id } = req.params
//    Eftersom adressen slutar på /4 blir id lika med "4".

// 3. Vi anropar funktionen
//    await deleteBook(id) skickar ID-numret vidare till SQL-frågan.

// 4. MySQL tar bort boken
//    DELETE FROM bok WHERE bokId = ?

// 5. Express skickar ett svar
//    Om boken togs bort får klienten meddelandet Boken har tagits bort!.


// Metod    Funktion.           SQL
// GET      Hämta böcker        SELECT
// POST     Skapa en bok        INSERT INTO
// PUT      Uppdatera en bok    UPDATE
// DELETE   Ta bort en bok      DELETE FROM


function getBooksCategories() { //getBooksCategories() använder JOIN för att koppla ihop tabellerna bok och kategori, så att vi får kategorins namn i stället för bara dess ID.
    return new Promise((resolve, reject) => {

        let sql = `
            SELECT
                bok.bokId,
                bok.bokTitel,
                bok.bokForfattare,
                bok.bokPris,
                kategori.kategoriNamn
            FROM bok
            JOIN kategori
            ON bok.bokKategoriId = kategori.kategoriId
        `;

        connectionMySQL.query(sql, (err, rows) => {//kör SQL-frågan oh får tillbaka resultatet i rows
            if (err) {
                reject(err);
            } else {
                resolve(rows);//gör resultatet tillgänglig för den kod som väntar på vår Promise
            }
        });
    });
}

app.get('/api/books-categories', async (req, res) => {

    try {
        const books = await getBooksCategories();

        res.json({ books });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

//Nu ska vi visa böckerna med HTML och fetch()
//Frontend- HTML och Javascript anropar /api/books-categories med fetch
//Http GET
//Backend-Express hämtar böcker och kategorier från MySql
//JSON-svar tillbaka till frontend
//Böckerna visas på webbsidan
