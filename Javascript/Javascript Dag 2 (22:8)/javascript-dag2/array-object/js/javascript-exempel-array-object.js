const elForm = document.querySelector('#formNewName');
const elFNamn = document.querySelector('#txtFNamn');
const elENamn = document.querySelector('#txtENamn');
const elNamesOutput = document.querySelector('#namesOutput');
const elFormOutput = document.querySelector('#formOutput');
const elBtnShowNames = document.querySelector('#btnShowNames');
const elBtnPopulateArray = document.querySelector('#btnPopulateArray');

let names = [];

// Funktion för att lägga till ett nytt namn
function newName(event){
    // Använd value när man hämtar från input i formuläret
    const fNamn = elFNamn.value;
    const eNamn = elENamn.value;

    // lägger till namnet till arrayen
    names.push(
        {forNamn: fNamn, efterNamn: eNamn}
    );

    elFormOutput.textContent = 'Du har lagt till: ' + fNamn + ' ' + eNamn;

    // Submittar inte formuläret
    event.preventDefault(); //
}

function arrayOfObject(){
    names.push(
        {forNamn: 'Jerry', efterNamn: 'Garcia'}, {forNamn: 'Joni', efterNamn: 'Mitchell'}
    );
}

// Funktion för att visa namnen i arrayen
function showNames(){
    let output = '';

   elFormOutput.textContent = ''; // Tömmer innehållet i p-taggen för meddelanden när man har lagt till ett nytt namn

    names.forEach(function(item, index, array) {
        output = output + ' ' + item.forNamn + ' ' + item.efterNamn;
    })
    elNamesOutput.textContent = output;
}

elForm.addEventListener('submit', newName, false);
elBtnShowNames.addEventListener('click', showNames, false);
elBtnPopulateArray.addEventListener('click', arrayOfObject, false);