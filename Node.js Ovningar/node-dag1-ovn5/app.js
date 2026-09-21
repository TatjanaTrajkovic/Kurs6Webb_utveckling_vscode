
const express = require('express') 
const app = express() // skapar vår express app
const port = 3000

app.use(express.json()) //gör att vi senare kan läsa JSON från req.body
app.use(express.static('public')) //gör att vår frontend i public kan visas

const movies = [ //en array som innehåller objekt
    {
        id: 1,
        title: "Titanic",
        year: 1997
    },
    {
        id: 2,
        title: "Gladiator",
        year: 2000
    }
];

app.get('/movies', (req, res) => {
    res.send(movies);
})

app.get('/movies/:id', (req, res) => {

    const id = req.params.id //data som kommer från url:en

    console.log(id)

    const movie = movies.find(movie => movie.id === Number(req.params.id))

    // res.send(id)
    res.send(movie)
})

app.post('/movies', (req, res) => {
                                    //data som skickas i requestens innehåll
    const { title, year } = req.body //req.body innehåller datan som frontend skickar till backend i requestens body.

    const newMovie = {
        id: movies.length + 1,
        title: title,
        year: year
    }

    movies.push(newMovie)

    res.send(newMovie)
})


app.listen(port, () => {
    console.log(`Servern körs på http://localhost:${port}`) //Startar servern på port 3000
})



