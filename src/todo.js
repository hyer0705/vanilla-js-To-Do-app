const todoContainer = document.querySelector(".js-todo-container");

const todoForm = todoContainer.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector(".js-todo-input");

const todoList = todoContainer.querySelector(".js-todo-list");

const TODOS_LS = "toDos";

// li -> span -> delete button
function paintList(text) {
    const todoText = text;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    const span = document.createElement("span");
    span.innerText = todoText;

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintList(currentValue);
    todoInput.value = "";
}

function loadToDoList() {
    const loadToDoList = localStorage.getItem(TODOS_LS);
    if (loadToDoList !== null) {

    }
}

function init() {
    loadToDoList();
    todoForm.addEventListener("submit", handleSubmit);
}
init();