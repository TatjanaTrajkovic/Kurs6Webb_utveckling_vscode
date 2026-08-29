// Spara
localStorage.setItem('name', 'Jerry');
localStorage.setItem('enamn', 'Johansson');

// Hämta
document.querySelector('#result').innerHTML = localStorage.getItem('name') + 
    ' ' + localStorage.getItem('enamn');