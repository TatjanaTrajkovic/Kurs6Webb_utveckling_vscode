 const obj = {
  name: 'Jerry',
  city: 'Göteborg',
  favoritAlbum: 'Jazz på Svenska'
}

const stringifiedObj = JSON.stringify(obj); //omvandla hela objekt till json format, den så den går att läsa

// Spara
localStorage.setItem(
  'user', //key, nyckel
  stringifiedObj //value, värde, som har gjort om hela objekt i json
)

// Hämta
const getUserInfo =
  localStorage.getItem('user');

const userInfoParsed = JSON.parse(getUserInfo);

console.log(userInfoParsed);

// Retrieve
document.querySelector('#result').innerHTML = userInfoParsed.name + ' ' + userInfoParsed.city 
  + ' ' + userInfoParsed.favoritAlbum;