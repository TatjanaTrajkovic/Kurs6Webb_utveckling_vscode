/*
För att skapa en Ajax Request använder webbläsaren XMLHTTPRequest objektet (Reuest)
När servern svarar används samma XMLHTTPRequest objektet för att bearbeta resultatet
och i detta fallet visa det i html med getElementById (Response)
 */
// Request: 1 An instance of the XMLHTTPRequest is created
var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object


// Response
xhr.onload = function() {// When readystate changes
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.todos.length; i++) { // Loop through object
        newContent += '<div>';
        newContent += responseObject.todos[i].todoTitle + '<br />';
        newContent += responseObject.todos[i].todoContent + '<br />';
        newContent += responseObject.todos[i].todoDate;
        newContent += '</div>';
    }

    // Update the page with the new content
    document.querySelector('#content').innerHTML = newContent;

  }
};

// Request: 2 Prepare the request to the server
xhr.open('GET', 'data/data.json', true);  // Dummy JSON Data
// Request: 3 Sends the request to the server
xhr.send(null);                                 // Send the request