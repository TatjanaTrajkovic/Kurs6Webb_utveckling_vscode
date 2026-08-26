const obj = {
  name: 'Jerry',
  city: 'Göteborg'
}

const stringifiedObj = JSON.stringify(obj)

// Spara
localStorage.setItem(
  "userInfo",
  stringifiedObj
)

// Hämta
const getUserInfo =
  localStorage.getItem('userInfo');

const userInfoParsed = JSON.parse(getUserInfo);

console.log(userInfoParsed);

// Retrieve
document.querySelector('#result').innerHTML = userInfoParsed.name + ' ' + userInfoParsed.city;