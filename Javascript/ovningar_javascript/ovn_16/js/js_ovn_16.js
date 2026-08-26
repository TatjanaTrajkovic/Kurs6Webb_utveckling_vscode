
let formular = document.getElementById('profilForm');

formular.addEventListener('submit', sparaProfil);

function sparaProfil(event){

    event.preventDefault();

    let namn = document.getElementById('namn').value;

    let favoritSelect = document.getElementById('favorit');
    let index = favoritSelect.selectedIndex;
    let favorit = favoritSelect.options[index].value;

    localStorage.setItem('namn', namn);//det första är nycke och det andra är värde key/value
    localStorage.setItem('favorit', favorit);

    visaProfil();

}

function visaProfil(){

    let sparatNamn = localStorage.getItem('namn');
    let sparadFavorit = localStorage.getItem('favorit');

    
    let tips = '';

    if(sparadFavorit == 'choklad'){
        tips = 'Du kanske skulle gilla kladkaka!';
    }else if(sparaProfil == 'kyckling'){
        tips = 'Du kanske skulle gilla kycklinggryta!';
    }else if(sparadFavorit == 'pasta'){
        tips = 'Du kanske skulle gilla pasta carbonara';
    }


    document.getElementById('profil').innerHTML = 
        'Hej ' + sparatNamn + 
        '! Din favoritingrendiens är ' + sparadFavorit + '.' + 
        tips;
}

visaProfil();


