function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.querySelector('#todos');

async function getTodos() {
  const url = 'data/data.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result.todos);

    let todo = result.todos;
        return todo.map(function(result) {
            let li = createNode('li');
            li.innerHTML = result.todoTitle + " " + result.todoDate;
            append(ul, li);
        })
  } catch (error) {
    console.error(error.message);
  }
}

//anropa fumktion
getTodos();
