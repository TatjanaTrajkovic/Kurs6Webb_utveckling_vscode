
function korLoop(){

    let text = document.getElementById('text').value;
    let antal = document.getElementById('antal').value;

    let resultat = '';

    for(let i = 1; i <= antal; i++){

        resultat = resultat + text + ' ' + i + '<br>';

        console.log(text + ' ' + i);
    }

    document.getElementById('resultat').innerHTML = resultat;
}




