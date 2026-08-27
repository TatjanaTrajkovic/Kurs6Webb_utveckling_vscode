const elUsername = document.querySelector('#username');  // Get username input

function checkUsername() {                             // Declare function
  let elMsg = document.querySelector('#feedback');     // Get feedback element
  if (this.value.length < 5) {                          // If username too short; istället för elUserName kan man skriva this. den förstår att det pekar mot dokumentets variabel
    elMsg.textContent = 'Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
}


// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);