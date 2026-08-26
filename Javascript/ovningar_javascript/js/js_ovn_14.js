
let todos = [];

//Lägg till en uppgift
let formular = document.getElementById('todoForm');

formular.addEventListener('submit', laggTillTodo);

function laggTillTodo(event){

    event.preventDefault();

    let todo = document.getElementById('todo').value;

    todos.push(todo);

    console.log(todos);
}

//Visa listan
let visaKnapp = document.getElementById('visaLista');

visaKnapp.addEventListener('click', visaTodos);

function visaTodos(){

    let resultat = '';

    for(let i = 0; i < todos.length; i++){
        resultat = resultat + todos[i] + '<br>';
    }

    document.getElementById('todoLista').innerHTML = resultat;
}

//Sortera listan
let sorteraKnapp = document.getElementById('sorteraLista');

sorteraKnapp.addEventListener('click', sorteraTodos);

function sorteraTodos(){

    todos.sort();

    visaTodos();
}

//Uppdatera uppgift
let uppdateraFormular = document.getElementById('uppdateraForm');

uppdateraFormular.addEventListener('submit', uppdateraTodo);

function uppdateraTodo(event){
    
    event.preventDefault();

    let gammalTodo = document.getElementById('gammalTodo').value;
    let nyTodo = document.getElementById('nyTodo').value;

    let pos = todos.indexOf(gammalTodo);

    todos[pos] = nyTodo;

    visaTodos();
}

//Slumpa uppgift
let slumpKnapp = document.getElementById('slumpaTodo');

slumpKnapp.addEventListener('click', slumpaTodo);

function slumpaTodo(){

    let randomNum = Math.floor(Math.random() * todos.length);

    document.getElementById('todoLista').innerHTML = 
        todos[randomNum];
}


