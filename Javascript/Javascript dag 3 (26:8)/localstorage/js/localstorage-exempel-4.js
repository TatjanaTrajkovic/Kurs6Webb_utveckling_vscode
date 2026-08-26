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
function showUsers(){
  const getUsersInfo =
    localStorage.getItem('usersInfo');

  const usersInfoParsed = JSON.parse(getUsersInfo);

  console.log(usersInfoParsed);

  usersInfoParsed.forEach(user => {
      let li = document.createElement("li");
      li.textContent =  `${user.name} : ${user.city}`
      elUserList.appendChild(li);
  });
}

//showUsers();

addUser();

function addUser(){
  // Hämta nuvarande array
  let storedUsers = JSON.parse(localStorage.getItem("usersInfo"));

  // Lägg till ett nytt objekt
  storedUsers.push({ name: 'Lisa', city: 'Göteborg' });

  // Spara tillbaka i localStorage
  localStorage.setItem("usersInfo", JSON.stringify(storedUsers));

  // Kolla resultatet
  console.log(JSON.parse(localStorage.getItem("usersInfo")));

  showUsers();
}