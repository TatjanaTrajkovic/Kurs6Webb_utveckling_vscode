
const moviesDiv = document.querySelector('#movies')

fetch('/movies') //Frontend ber backend att hämta/skicka movies-arrayen.Eftersom vi inte skriver någon method i fetch() blir det automatiskt en GET-request.
    .then(response => response.json()) //läser JSON-svaret och omvandlar det till JavaScript-data som vi kan jobba med.
    .then(movies => {

        movies.forEach(movie => {
            // console.log(movie) 

            moviesDiv.innerHTML += `
                <p>${movie.title} - ${movie.year}</p>
            `
                     
        });
    })

const movieForm = document.querySelector('#movieForm')

movieForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('Formuläret skickades')

    const title = document.querySelector('#title').value
    const year = document.querySelector('#year').value

    const newMovie = {
        title: title,
        year: year
    }
    // console.log(newMovie)

    fetch('/movies', {
        method: 'POST', //vilken typ av request skickar vi
        headers: {
            'Content-Type': 'application/json' // vi berättar att datan är JSON
        },
        body: JSON.stringify(newMovie)// den gör om Javascript-objektet till JSON-text som kan skickas i requestens body
    })
    .then(response => response.json())
    .then(movie => {
        moviesDiv.innerHTML += `
            <p>${movie.title} - ${movie.year}</p>
        `
    })

    // console.log(title)
    // console.log(year)
})


//det som händer här att Webbsidan för en fetch('/movies) - GET/movies
//Express - res.send(movies) - filmerna kommer tillbaka till script.js
//console.log(movies)

//Det här är en viktig skillnad nu när vi har både frontend och backend:

// app.js → server/backend → terminalen
// script.js → klient/frontend → webbläsarens Console

// Och fetch() är själva kommunikationen mellan de två.


// GET /movies
// → frontend hämtar alla filmer
// → filmerna visas på sidan

// POST /movies
// → formuläret skapar newMovie
// → fetch skickar den till backend
// → req.body tar emot den
// → movies.push() lägger den i arrayen


// HTML-formulär → JavaScript → fetch → Express → array → svar tillbaka → visas på webbsidan.