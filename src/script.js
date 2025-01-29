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

addBtn.addEventListener("click", () => {
    console.log("Button has been clicked!"); 
    console.log("Input-value: ", input.value);

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
    });

checkbox1.addEventListener("change", () => {
    console.log("checkbox1 has changed");
    list1.style.display = `none`;
    todo1.innerText = ``;
    checkbox1.checked = false;
});

checkbox2.addEventListener("change", () => {
    console.log("checkbox2 has changed");
    list2.style.display = `none`;
    todo2.innerText = ``;
    checkbox2.checked = false;
});

checkbox3.addEventListener("change", () => {
    console.log("checkbox2 has changed");
    list3.style.display = `none`;
    todo3.innerText = ``;
    checkbox3.checked = false;
});

checkbox4.addEventListener("change", () => {
    console.log("checkbox2 has changed");
    list4.style.display = `none`;
    todo4.innerText = ``;
    checkbox4.checked = false;
});






