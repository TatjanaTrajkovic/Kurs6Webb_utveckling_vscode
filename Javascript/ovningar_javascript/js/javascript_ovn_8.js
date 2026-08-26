
let antal = 5;
let meddelande = '';

console.log('Före loopen: ');
console.log('Antal: ' + antal);
console.log('Meddelande: ' + meddelande);


for(let i = 1; i <= antal; i++){
    meddelande = 'Nu kör vi loopen nr ' + i;
    console.log(meddelande);
}
