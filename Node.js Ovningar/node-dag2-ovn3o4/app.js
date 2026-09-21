
const express = require('express')
const app = express()
const port = 3000


// express.json()
//       ↓
// kan läsa JSON-data

// express.urlencoded(...)
//       ↓
// kan läsa data från HTML-formulär

//       ↓
// Express lägger datan i

// req.body

app.use(express.json())//de här två raderna gör att express kan läsa data som klienten skickar till servern
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));

app.post('/records', (req, res) => {
    
    const { artist, title } = req.body;

    if(!artist || !title){
        return res.status(400).send('Artist och title måste fyllas i!')
    }

    console.log(artist);
    console.log(title);

    res.send('Skivan har tagits emot!')

})

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`));



