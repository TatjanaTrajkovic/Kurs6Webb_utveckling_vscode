

// const booksDiv = document.querySelector('#books') //Hitta en html element- javascript hittar vår div med ID books och sparar den i variabeln booksDiv

// fetch('/api/books-categories')// Hämta böckerna- skickar en GET-request till din Express backend
//     .then(response => response.json())//Omvandla svaret- läser JSON-svaret från backend och omvandlar det till Javascript-data
//     .then(data => {
//         console.log(data)//Kontrollera resultatet- skriver ut inforamtionen i webbläsarens konsol
//     })

const booksDiv = document.querySelector('#books')

fetch('/api/books-categories')
    .then(response => response.json())
    .then(data => {

        data.books.forEach(book => {
            booksDiv.innerHTML += `
                <div>
                    <h2>${book.bokTitel}</h2>
                    <p>Författare: ${book.bokForfattare}</p>
                    <p>Kategori: ${book.kategoriNamn}</p>
                    <p>Pris: ${book.bokPris} kr</p>
                </div>
                <hr>
            `
        })

    })
