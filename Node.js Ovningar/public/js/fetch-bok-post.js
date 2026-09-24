

const bookForm = document.querySelector('#bookForm') //här hittar den formuläret mha #bookForm

// bookForm.addEventListener('submit', (event) => {//på submit kör vår kod när formuläret skickas
    // event.preventDefault() //hindrar webläsaren från att ladda om sidan automatiskt

    // console.log('Formuläret skickades!')

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value
    const price = document.querySelector('#price').value
    const category = document.querySelector('#category').value

    console.log(title, author, isbn, price, category)

    const newBook = { //här skapas ett objekt av formulärvärdena
        bokTitel: title,
        bokForfattare: author,
        bokIsbn: isbn,
        bokPris: Number(price),
        bokKategoriId: Number(category)
    }

    console.log(newBook)

    fetch('/api/books', { //skickar en förfrågan till vår befintliga endpoint i app.js
        method: 'POST', //talar om att vi ska skapa en bok
        headers: {
            'Content-Type': 'application/json' //talar om för express att vi skickar JSON
        },
        body: JSON.stringify(newBook)//omvandlar vårt javascript objekt till en JSON-sträng som kan skickas till backend
    })
        .then(response => response.json())//läser svaret från express och omvandlar det till javascript data
        .then(data => {
            console.log(data)

            if (data.success) {// för att bara ladda om sidan när backend bekräftar att boken har sparats i MySQL.
                window.location.reload()
    }
        })
        .catch(error => {
            console.error('Något gick fel:', error)
        })
})

// HTML-formuläret- användarens skriver titel, författare, isbn, pris och kategori
//Javascript- .value hämtar värdena och newBook samlar dem i ett objekt
// Express- skickar objektet till /api/books med POST metoden

//Flödet:
// Du fyller i formuläret och klickar på Lägg till bok
// fetch() skickar newBook till din POST-endpoint
// Express sparar boken i MySQL och skickar tillbaka success: true
// window.location.reload() laddar om sidan så att den nya boken visas
