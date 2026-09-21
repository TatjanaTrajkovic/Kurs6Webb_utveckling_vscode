
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/todos', (req, res) => {
    res.send('Här visas alla todos!')
})

app.post('/todos', (req, res) => {
    res.send('Vi får en Post Request!')
})

app.put('/todos', (req, res) => {
    res.send('Här har vi en uppdatering med Put Request!')
})

app.delete('/todos', (req, res) => {
    res.send('Här tar vi bort en todo med Delete Request!')
})

app.get('/categories', (req, res) => {
    res.send('Här är alla våra categories!')
})

app.post('/categories', (req, res) => {
    res.send('Här lägger vi till en katogorie i Categories med Post Request')
})

app.put('/categories', (req, res) => {
    res.send('Här ändrar vi på categori med Put Request')
})

app.delete('/categories', (req, res) => {
    res.send('Här tar vi bort categorie med Delete Request')
})



//så dessa är 4 st request som svarar med respons
//De här fyra:
// app.get(...)
// app.post(...)
// app.put(...)
// app.delete(...)
// är fyra olika request-metoder som Express lyssnar efter.

// Så exempelvis:
// app.put('/todos', (req, res) => {
//     res.send('Här har vi en uppdatering!')
// })
// kan du läsa som:
// Request: Klienten skickar PUT /todos
// Express: Ser att det finns en app.put('/todos')
// Response: Servern svarar med res.send(...)
//Och just i den här övningen gör de inget med riktig data ännu. De svarar bara med text för att du ska lära dig hur olika endpoints/request-metoder fungerar.
//Så en väldigt bra minnesregel är:
// req = läsa det som kom IN
// res = skicka något UT.


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});



