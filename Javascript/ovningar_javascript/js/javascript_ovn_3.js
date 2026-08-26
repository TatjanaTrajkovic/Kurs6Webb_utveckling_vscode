

function beraknaPris(){

    let antal = document.getElementById('antal').value;
    let pris = document.getElementById('pris').value;

    let totalpris = antal * pris;

    //visa resultat på sidan
    document.getElementById('totalpris').innerHTML = 'Total pris: ' + totalpris + ' kr';



}



