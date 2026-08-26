
let formular = document.getElementById('temperaturForm');

formular.addEventListener('submit', konverteraTemperatur);

function konverteraTemperatur(event){

    event.preventDefault();

    let temperatur = document.getElementById('temperatur').value;

    let enhetSelect = document.getElementById('enhet');
    let index = enhetSelect.selectedIndex;
    let enhet = enhetSelect.options[index].value;

    let resultat = '';

    if(enhet == 'fahrenheit'){

        resultat = tillFahrenheit(temperatur);

        document.getElementById('resultat').innerHTML = 
            resultat + ' F';

    }else{

        resultat = tillCelsius(temperatur);

        document.getElementById('resultat').innerHTML =
        resultat + ' C';
    }
}


function tillFahrenheit(celsius){
    
    let fahrenheit = celsius * 9 / 5 + 32;
    
    return fahrenheit;//skicka tillbaka resultatet från functionen
}

function tillCelsius(fahrenheit){

    let celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
}




