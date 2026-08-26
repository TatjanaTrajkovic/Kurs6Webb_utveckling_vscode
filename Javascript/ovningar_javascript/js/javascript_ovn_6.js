
function kollaVader(){

    let regn = document.getElementById('regn').value;
    let kallt = document.getElementById('kallt').value;

    let meddelande = '';

    if(regn == 'ja' && kallt == 'ja'){
        meddelande = 'Det regnar och är kallt idag!';
    }else if(regn == 'ja' && kallt == 'nej'){
        meddelande = 'Det regnar men är varmt idag!';
    }else if(regn == 'nej' && kallt == 'ja'){
        meddelande = 'Det regnar inte men är kallt idag!';
    } else {
        meddelande = 'Det är varmt och soligt idag!';
    }

    document.getElementById('vader').innerHTML = meddelande;


}





