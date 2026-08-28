fetch('data/data.json') //fetch() hämta filen
    .then((response) => {   // när hämtningen är klar då gör nästa sak får vi tillabaka ett svar, det svaret kallas här för response
        return response.json();// sen gör om svaret till javascript-data, dvs ta svaret och läs innehållet som json, omvandlar json-informationen så att js kan arbeta med den
        //return skickar sedan resutltatet vidare till nästa .then
    })
    .then((data) => { //.then väntar på omvandlade svaret och när den är klar får vi resultatet här i data
        console.log(data); //visa datan i console
    });




