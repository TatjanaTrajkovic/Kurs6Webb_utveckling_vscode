
let formular = document.getElementById('pizzaForm');

formular.addEventListener('submit', bestallPizza);

function bestallPizza(event){

    event.preventDefault();

    let pizzaSelect = document.getElementById('pizza');
    let index = pizzaSelect.selectedIndex;
    let pizza = pizzaSelect.options[index].value;

    //pizzaSelect/selectIndex/vilket alternativ är valt?/options[index]/hämta .value

    let antal = document.getElementById('antal').value;

    //kontrollera antal
    if(antal < 1){
        document.getElementById('felmeddelande').innerHTML = 
            'Du måste beställa minst en pizza.';
        return;
    }

    document.getElementById('felmeddelande').innerHTML = '';

    //Bestäm pris beroende på pizza, typ behållare
    let pris = 0;

    if(pizza == 'Margherita'){
        pris = 80;
    }else if(pizza == 'Vesuvio'){
        pris = 90;
    }else if(pizza == 'Capriccosa'){
        pris = 100;
    }

    //Beräkna totalpris
    let totalpris = pris * antal;

    //Kontrollera rabatt
    if(totalpris > 150){

        let rabatt = totalpris * 0.10;
        let prisMedRabatt = totalpris - rabatt;

        document.getElementById('bestallning').innerHTML = 
            'Du har bestallt ' + antal + ' ' + pizza + 
            '. Ordinarie pris är ' + totalpris + 
            'kr. Du får 10% rabatt och betalar ' + 
            '. Att betala: ' + prisMedRabatt + ' kr.';

    }else {
        document.getElementById('bestallning').innerHTML = 
            'Du har beställt ' + antal + ' ' + pizza + 
            '. Att betala: ' + totalpris + 'kr.';
    }
}


// övning 12 egentligen tränar

// Nu börjar flera av de tidigare övningarna kopplas ihop:
// <select>
//    ↓
// selectedIndex
//    ↓
// vilken pizza?
//    ↓
// if
//    ↓
// bestäm pris
//    ↓
// pris × antal
//    ↓
// totalpris
//    ↓
// är totalpris > 150?
//    ↓
// JA → 10 % rabatt
// NEJ → vanligt pris


