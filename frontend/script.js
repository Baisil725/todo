const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

let todos = [];

function render(){
    list.innerHTML = '';
    todos.forEach((todo, index) =>{
        const li = document.createElement('li');
        li.textContent = todo;
        const del = document.createElement('button');
        del.textContent = 'delete';
        del.addEventListener('click', () => {
            todos.splice(index,1);
            render();
        });
        list.appendChild(li);
        li.appendChild(del);
    });
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    todos.push(input.value);
    input.value = '';
    render();
});
