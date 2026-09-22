
// För att förstå det bättre kan vi dela upp det i tre delar:
// - express() (Ritningen blir till ett objekt): När du importerar Express (const express = require('express')) får du en funktion.
// När du sedan anropar den funktionen med parenteser () skapar Express ett stort JavaScript-objekt i bakgrunden. 
// Detta objekt innehåller alla färdiga verktyg, metoder och funktioner som behövs för att bygga en webbserver (t.ex. för att lyssna på trafik eller skicka hemsidor till en webbläsare).
// - const app (Variabeln/Handtaget): Vi skapar en konstant variabel som vi döper till app. 
// Detta namn är en stark standard i branschen, men du hade i teorin kunnat döpa den till minServer eller vad som helst.
// = (Kopplingen): Vi sparar hela Express-appen inuti variabeln app. Nu blir app ditt "handtag" eller din kontrollpanel för hela servern.

// Vad använder man app till sen?
// När denna rad är körd kan du börja använda app för att styra din server via dess inbyggda metoder. 
// Här är tre vanliga exempel:
// Skapa rutter (Routes): app.get('/', ...) säger till servern vad den ska göra när någon besöker startsidan.
// Använda plugins (Middleware): app.use(...) används för att lägga till extrafunktioner, som att servera bilder eller tolka JSON-text.
// Starta servern: app.listen(3000, ...) säger åt servern att faktiskt starta och börja lyssna efter besökare på port 3000.


const express = require('express') //hämtar Express så vi kan använda Express i vår Node.js backend och sparar den i en variabeln express
const app = express() // här skapar vi vår Express applikation, en instans av Express. vi startar igång en ny webbserver i koden genom att anropa funktionen/metoden express() och sparar hela den servern i en variabel som kallas app.
const port = 3000 //här är porten som vår backend kommer att köras på 
const addition = require('./mymodul')

//sedan skapar vi route/endpoint
app.get('/', (req, res) => { // '/' detta är startvägen i vår server
    res.send('Summan är ' + addition) //skickar ett svar från servern till klienten, tex. webbläsaren
})

app.listen(port, () => {
    console.log(`Servern körs på port ${port}`) //skriver ut text i terminalen, den är viktig när vi felsöker
})


// Lärarens exempel 1

// Skapat en Express-server.
// Skapat en egen modul (mymodule.js).
// Exporterat ett värde med module.exports.
// Hämtat värdet med require().
// Visat summan i webbläsaren.

