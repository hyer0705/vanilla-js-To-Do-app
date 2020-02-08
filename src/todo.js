let todoContainer = document.querySelector(".js-todo-container");

const todoForm = todoContainer.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector(".js-todo-input");

const todoList = todoContainer.querySelector(".js-todo-list");

const TODOS_LS = "toDos";

let toDos = []; // todo list의 정보를 저장할 배열

// delete in HTML -> delete in local storage
function deleteToDo(event) {
    const clickedBtn = event.target;
    const clickedLi = clickedBtn.parentNode;
    todoList.removeChild(clickedLi);

    const cleanToDos = toDos.filter(function (todo) {
        return todo.id !== clickedLi.id;
    });
    toDos = cleanToDos;

    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// li -> span -> delete button
function paintList(text) {
    const todoText = text;

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteToDo);
    deleteBtn.innerText = "✖";
    const span = document.createElement("span");
    span.innerText = todoText;

    const toDoId = "todo" + (toDos.length + 1);

    li.id = toDoId;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    const todoObj = {
        text: text,
        id: toDoId
    };

    toDos.push(todoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintList(currentValue);
    todoInput.value = "";
}

function loadToDoList() {
    const loadedList = localStorage.getItem(TODOS_LS);
    if (loadedList !== null) {
        parsedList = JSON.parse(loadedList);
        parsedList.forEach(function (todo) {
            paintList(todo.text);
        });
    }
}

function init() {
    loadToDoList();
    todoForm.addEventListener("submit", handleSubmit);
}
init();