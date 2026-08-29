const elUserList = document.querySelector('#usersList');

const obj = [ //array med flera objekt i
  {
  name: 'Jerry',
  city: 'Göteborg',
  favoriteAlbum: 'Jazz på Svenska'
  },
  {
    name: 'Pelle',
    city: 'Halmstad',
    favoriteAlbum: 'Revolver'
  }
];

const stringifiedObj = JSON.stringify(obj);

// Spara
localStorage.setItem(
  'users',
  stringifiedObj
)

// Hämta
const getUsersInfo =
  localStorage.getItem('users');

const usersInfoParsed = JSON.parse(getUsersInfo);

console.log(usersInfoParsed);


usersInfoParsed.forEach(user => {
      let li = document.createElement("li");
      li.textContent =  `${user.name} : ${user.city} - ${user.favoriteAlbum}`;
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