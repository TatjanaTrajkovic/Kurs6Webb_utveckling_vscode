

function bestallPizza(){

    let pizza = document.getElementById('pizza').value;
    let pris = document.getElementById('pris').value;
    let antal = document.getElementById('antal').value;

    let totalpris = pris * antal;


    if(totalpris > 150){

        let rabbat = totalpris * 0.10;
        let prisMedRabbat = totalpris - rabbat;

        document.getElementById('bestallning').innerHTML =
            'Du har beställt ' + antal + ' ' + pizza + 
            '. Priset är ' + totalpris + 'kr. Du får 10% rabbat och betalar ' + 
            prisMedRabbat + 'kr.';

    }else {

        document.getElementById('bestallning').innerHTML =
            'Du har beställt ' + antal + ' ' + pizza +
            '. Priset är ' + totalpris + 'kr.';
    }

}




