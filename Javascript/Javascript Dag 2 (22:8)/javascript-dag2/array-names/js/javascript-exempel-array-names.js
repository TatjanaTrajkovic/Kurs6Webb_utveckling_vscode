
/*Man kan börja skriva pseudokod:

1. Spara alla element i variabler
2. Deklarera variabel för namn som är global
3. EventListener för formuläret och knappen som visar alla namn
4. Skapa funktion för att lägga till ett namn
5. Skapa funktion för att visa alla namn

*/ 


const elForm = document.querySelector('#formNewName');
const elName = document.querySelector('#txtName');
const elFormOutput = document.querySelector('#formOutput');
const elBtnShowNames = document.querySelector('#btnShowNames');
const elNamesOutput = document.querySelector('#namesOutput');



let names = [];

// Funktion för att lägga till ett nytt namn
function newName(event){
    // Använd value när man hämtar från input i formuläret
    let name = elName.value;

    // lägger till namnet till arrayen
    names.push(name);

    elFormOutput.textContent = 'Du har lagt till: ' + name;

    // Submittar inte formuläret
    event.preventDefault(); //
}

// Funktion för att visa namnen i arrayen
function showNames(){
    let output = '';

   elFormOutput.textContent = ''; // Tömmer innehållet i p-taggen för meddelanden när man har lagt till ett nytt namn

    names.forEach(function(item, index, array) {
        output = output + ' ' + item;
    })
    elNamesOutput.textContent = output;
}

elForm.addEventListener('submit', newName, false);
elBtnShowNames.addEventListener('click', showNames, false);