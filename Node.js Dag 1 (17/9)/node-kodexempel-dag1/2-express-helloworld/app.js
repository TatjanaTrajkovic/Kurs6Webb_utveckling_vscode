const express = require('express'); //deklarera ett objekt med constant som heter express och via require kommer den att använda express.Men först måste man installera dependencies express med npm init -y och npm install express
const app = express(); //sen skapar man instans av express då 
const port = 3000; //att man lägger en port nummer i en variabel det är vanligt portnr för backend. Med vue vite är det 5150

app.get('/', (req, res) => { //endpoints/routes som går mot root mappen
    res.send('Hello World!');
});

app.get('/album', (req, res) => {
    res.send('Mitt favorit album är Revolver');
});

app.post('/album', (req, res) => {
    res.send('Här lägger vi till ett album');
});

app.put('/album', (req, res) => {
    res.send('Här uppdaterar vi ett album')
})

app.listen(port, () => { //listen lyssnar över connections. Så den lyssnaren kommer att ha tillgång till express. Anledningen att man använder express är för att kunna skriva endpoints eller routs då
    console.log(`Example app listening on port ${port}`);
});