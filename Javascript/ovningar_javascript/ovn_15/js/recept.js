
fetch('json/recept.json')
    .then(function(response){
        return response.json();
    })
    .then(function(recept){

        console.log(recept);

        let output = '';

        for(let i = 0; i < recept.length; i++){

            output += output + 
                '<h3>' + recept[i].namn + '</h3>' + 
                '<p>Betyg: ' + recept[i].betyg + '/5</p>'; 
        }

        document.getElementById('receptLista').innerHTML = output;
    });

//Hämta recept.json. När svaret kommer, gör om svaret från JSON till JavaScript-data.

