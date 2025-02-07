const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

const input = document.querySelector('.todo-input');
const now = new Date();
let hour = now.getHours();

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name } = todoObject;
        const html = `
        <div id="js-list" class="list">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="custom-checkbox"></span>
            <p class="js-todo">${name}</p>
          </label>
        </div>
        `;
        todoListHTML += html;
    });

    document.querySelector('.list-container').innerHTML = todoListHTML;

    document.querySelectorAll('.checkbox').forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            todoList.splice(index, 1);
            renderTodoList();
            checkbox.checked = false;
        });
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));
}

document.querySelector('.add-btn').addEventListener('click', () => {
    addTodo();
});

function addTodo() {
    const name = input.value;

    if (name) {
        todoList.unshift({ name });
        input.value = '';
        renderTodoList();
    }
}

input.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        addTodo();
    }
});

if (hour < 6 || hour > 20){
    document.querySelector(`body`).style.background = `linear-gradient(to bottom, #081443 70%, #1e3597)`;
    document.querySelector(`.todo-container`).style.backgroundColor = `#1e3597`;
    document.querySelector(`.todo-container`).style.color = `white`;
    document.querySelector(`.todo-container`).style.boxShadow = `0 0 2px 5px #1e3597`;
    document.querySelector(`.add-btn`).style.backgroundColor = `#8babf0`;
    document.querySelector(`.list`).style.backgroundColor = `#8babf0`;
    document.querySelector(`.list`).style.boxShadow = `0 0 2px 4px #8babf0`;
}
