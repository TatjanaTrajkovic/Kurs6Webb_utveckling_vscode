

function konverteraTempTillCelsius(){
    
    let celsius = document.getElementById('celsius').value;

    let fahrenheit = celsius * 9 / 5 + 32;

    document.getElementById('resultat').innerHTML = 
        celsius + ' C är ' + fahrenheit + ' F';

}



