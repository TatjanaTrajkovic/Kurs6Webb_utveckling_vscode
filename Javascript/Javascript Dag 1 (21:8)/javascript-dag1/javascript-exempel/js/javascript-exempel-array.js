// Deklarerar en array med två värden
let fruits = ['Äpplen', 'Bananer'];

showFruits(); // Funktion som visar värden i arrayen

fruits.push('Apelsiner');
fruits.push('Päron');

showFruits();

let last = fruits.pop(); // Tar bort sista elementet i arrayen

showFruits();

let pos = fruits.indexOf('Äpplen'); // Hittar positionen (i detta fallet Äpplen)
let removedItem = fruits.splice(pos, 1) // Tar bort elementet på positionen som har returnerats med indexOf på raden ovanför

showFruits();

fruits.sort(); // Sorterar arrayen

showFruits();

fruits[0] = 'Blodapelsiner';

showFruits();


// Funktion som visar frukterna i arrayen
function showFruits(){
    let output = '';

    fruits.forEach(function(item, index, array) {
        //console.log(item, index);
        output = output + ' ' + item;
    })
    console.log(output);
}