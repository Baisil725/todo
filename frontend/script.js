const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

function render() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      todos.splice(index, 1);
      render();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.push(input.value);
  input.value = '';
  render();
});