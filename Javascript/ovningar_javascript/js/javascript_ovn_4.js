
function visaHalsning(){

    let namn = document.getElementById('namn').value;

    let datum = new Date();
    let time = datum.getHours();
    let manad = datum.getMonth();

    let halsning = '';
    let arstid = '';

    if(time < 10){
        halsning = 'God morgon.';
    } else if(time < 12){
        halsning = 'God förmiddag.';
    } else if(time < 18){
        halsning = 'God eftermiddag';
    } else {
        halsning = 'God kväll';
    }

    if(manad === 11 || manad <= 1){
        arstid = 'vinter';
    }else if(manad <= 4){
        arstid = 'vår';
    }else if(manad <= 7){
        arstid = 'sommar';
    }else{
        arstid = 'höst';
    }

    document.getElementById('halsning').innerHTML = halsning + ' ' + namn + '! Det är ' + arstid + '.';
}


