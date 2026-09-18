function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#bok');

async function getBooks() {
  // const url = 'data/data.json';
  const url = "http://localhost:3000/books/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

    let book = result;
        return book.map(function(result) {
            let li = createNode('li');
            li.innerHTML = result.bokTitel + " " + result.bokForfattare;
            append(ul, li);
        })
  } catch (error) {
    console.error(error.message);
  }
}
 getBooks();