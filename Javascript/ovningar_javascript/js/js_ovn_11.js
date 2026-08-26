
let formular = document.getElementById('kommentarForm');

formular.addEventListener('submit', visaKommentar);

function visaKommentar(event){
    event.preventDefault();

    let namn = document.getElementById('namn').value;
    let kommentar = document.getElementById('kommentar').value;

    if(namn.length < 2){

        document.getElementById('felmeddelande').innerHTML = 
            'Namnet måste innehålla minst 2 tecken.';

    }else if(kommentar.length < 10){

        document.getElementById('felmeddelande').innerHTML = 
            'Kommentaren måste innehålla minst 10 tecken.';

    }else {
        document.getElementById('felmeddelnde').innerHTML = '';

        document.getElementById('visadKommentar').innerHTML = 
            '<h3>' + namn + '</h3>' + 
            '<p>' + kommentar + '</p<';
    }

}

