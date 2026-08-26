
let movies = ['Titanic', 'Avatar']


function showMovies(){

    for(let i = 0; i <= movies.length; i ++){

        console.log(movies[i]);

    }
}

//1. lägg till en film
movies.push('Gladiator');

showMovies();

//2. ta bort det sista filmen
movies.pop();

showMovies();

//3. byt namn på första elementet
movies[0] = 'The Matrix';

showMovies();

//4. lägg till en ny film i arrayen
movies.push('Interstellar');

showMovies();

//5. leta upp en index du har i din array

let index = movies.indexOf('Avatar');

console.log('Index för Avatar: ' + index);


//6. ta bort filmen på det indexet
movies.splice(index, 1);
showMovies();

//7. sortera arrayen
movies.sort();
showMovies();
