const elUserList = document.querySelector('#usersList');

const obj = [{
  name: 'Jerry',
  city: 'Göteborg'},
{
  name: 'Pelle',
  city: 'Halmstad'
}];

const stringifiedObj = JSON.stringify(obj)

// Spara
localStorage.setItem(
  "usersInfo",
  stringifiedObj
)

// Hämta
const getUsersInfo =
  localStorage.getItem('usersInfo');

const usersInfoParsed = JSON.parse(getUsersInfo);

console.log(usersInfoParsed);


usersInfoParsed.forEach(user => {
      let li = document.createElement("li");
      li.textContent =  `${user.name} : ${user.city}`
      elUserList.appendChild(li);
});
// Arrow syntax i Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/*
Men vanlig function syntax
usersInfoParsed.forEach(function(user) {
      let li = document.createElement("li");
      li.textContent =  `${user.name} : ${user.city}`
      elUserList.appendChild(li);
});
*/