const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

const input = document.querySelector('.todo-input');

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
