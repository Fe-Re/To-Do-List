const list1 = document.getElementById(`js-list1`);
const list2 = document.getElementById(`js-list2`);
const list3 = document.getElementById(`js-list3`);
const list4 = document.getElementById(`js-list4`);

const todo1 = document.querySelector(`.js-todo1`);
const todo2 = document.querySelector(`.js-todo2`);
const todo3 = document.querySelector(`.js-todo3`);
const todo4 = document.querySelector(`.js-todo4`);

const checkbox1 = document.getElementById(`checkbox1`);
const checkbox2 = document.getElementById(`checkbox2`);
const checkbox3 = document.getElementById(`checkbox3`);
const checkbox4 = document.getElementById(`checkbox4`);

const addBtn = document.querySelector(`.add-btn`);
const input = document.querySelector(`.todo-input`);

const now = new Date();
let hour = now.getHours();

function saveTodos() {
  const todos = {
    list1: {
      displayed: list1.style.display !== 'none',
      text: todo1.innerText,
    },
    list2: {
      displayed: list2.style.display !== 'none',
      text: todo2.innerText,
    },
    list3: {
      displayed: list3.style.display !== 'none',
      text: todo3.innerText,
    },
    list4: {
      displayed: list4.style.display !== 'none',
      text: todo4.innerText,
    }
  };
  localStorage.setItem('todos', JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    const todos = JSON.parse(savedTodos);
    
    list1.style.display = todos.list1.displayed ? 'flex' : 'none';
    todo1.innerText = todos.list1.text;

    list2.style.display = todos.list2.displayed ? 'flex' : 'none';
    todo2.innerText = todos.list2.text;

    list3.style.display = todos.list3.displayed ? 'flex' : 'none';
    todo3.innerText = todos.list3.text;

    list4.style.display = todos.list4.displayed ? 'flex' : 'none';
    todo4.innerText = todos.list4.text;
  }
});

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Please enter a to-do!");
    return;
  }
  if (getComputedStyle(list1).display === "none") {
    list1.style.display = "flex";
    todo1.innerText = input.value;
  } else if (getComputedStyle(list2).display === "none") {
    list2.style.display = "flex";
    todo2.innerText = input.value;
  } else if (getComputedStyle(list3).display === "none") {
    list3.style.display = "flex";
    todo3.innerText = input.value;
  } else if (getComputedStyle(list4).display === "none") {
    list4.style.display = "flex";
    todo4.innerText = input.value;
  } else {
    alert("Maximum number of to-dos reached!");
  }
  input.value = "";
  saveTodos();
});

checkbox1.addEventListener("change", () => {
  list1.style.display = `none`;
  todo1.innerText = ``;
  checkbox1.checked = false;
  saveTodos();
});

checkbox2.addEventListener("change", () => {
  list2.style.display = `none`;
  todo2.innerText = ``;
  checkbox2.checked = false;
  saveTodos();
});

checkbox3.addEventListener("change", () => {
  list3.style.display = `none`;
  todo3.innerText = ``;
  checkbox3.checked = false;
  saveTodos();
});

checkbox4.addEventListener("change", () => {
  list4.style.display = `none`;
  todo4.innerText = ``;
  checkbox4.checked = false;
  saveTodos();
});

if (hour < 5 || hour > 20){
    document.querySelector(`body`).style.background = `linear-gradient(to bottom, #081443 70%, #1e3597)`;
    document.querySelector(`.todo-container`).style.backgroundColor = `#1e3597`;
    document.querySelector(`.todo-container`).style.color = `white`;
    document.querySelector(`.todo-container`).style.boxShadow = `0 0 2px 5px #1e3597`;
    document.querySelector(`.add-btn`).style.backgroundColor = `#8babf0`;
    document.getElementById(`js-list1`).style.backgroundColor = `#8babf0`;
    document.getElementById(`js-list1`).style.boxShadow = `0 0 2px 4px #8babf0`;
    document.getElementById(`js-list2`).style.backgroundColor = `#8babf0`;
    document.getElementById(`js-list2`).style.boxShadow = `0 0 2px 4px #8babf0`;
    document.getElementById(`js-list3`).style.backgroundColor = `#8babf0`;
    document.getElementById(`js-list3`).style.boxShadow = `0 0 2px 4px #8babf0`;
    document.getElementById(`js-list4`).style.backgroundColor = `#8babf0`;
    document.getElementById(`js-list4`).style.boxShadow = `0 0 2px 4px #8babf0`;
}