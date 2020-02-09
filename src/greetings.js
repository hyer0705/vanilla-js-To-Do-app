todoContainer = document.querySelector(".js-todo-container");
const TODO_SHOWING_CL = "todo-showing";

const greetingContainer = document.querySelector(".js-greeting"),
    greetingForm = greetingContainer.querySelector(".js-username-form"),
    greetingText = greetingContainer.querySelector(".js-greeting__text"),
    greetingInput = greetingForm.querySelector(".js-username-input");

const USERNAME_LS = "username";
const GREETING_SHOWING_CL = "greeting-showing";

let updateUserName = false;

// show 'js-username-form' -> update localstorage
function handleClickEdit(event) {
    console.log("clicked!")
    updateUserName = true;
    greetingText.classList.remove(GREETING_SHOWING_CL);
    askForUserName();
}

function getGreeting() {
    const date = getTime();
    const hours = date.getHours();

    if (hours > 5 && hours < 12) {  // good morning : 5시 초과 ~ 12시 미만
        return 'Good Morning';
    } else if (hours >= 12 && hours < 18) { // good afternoon : 12시 이상 ~ 18시 미만
        return 'Good Afternoon';
    } else if ((hours >= 18 && hours <= 24) || (hours >= 0 && hours <= 5)) { // good evening : 18시 이상 ~ 24 이하 or 00시 이상 ~ 5시 이하
        return 'Good Evening';
    }
}

function saveUserName(name) {
    localStorage.setItem(USERNAME_LS, name);
}

function handleSubmitGreet(event) {
    event.preventDefault();
    const inputName = greetingInput.value;

    saveUserName(inputName);
    paintGreeting(inputName);
    todoContainer.classList.add(TODO_SHOWING_CL);
}

function askForUserName() {
    greetingForm.classList.add(GREETING_SHOWING_CL);

    greetingForm.addEventListener("submit", handleSubmitGreet);
}

function paintGreeting(name) {
    if (updateUserName) {
        greetingText.innerHTML = "";
    }

    const currentUserName = name;

    const greeting = getGreeting();

    const testText = `${greeting}! ${currentUserName}`;
    const spanGreet = document.createElement("span");
    spanGreet.innerText = testText;
    spanGreet.classList.add("testDelete1");

    const editIcon = document.createElement("i");
    editIcon.classList.add("far");
    editIcon.classList.add("fa-edit");
    editIcon.classList.add("testDelete2");
    editIcon.addEventListener("click", handleClickEdit);

    greetingForm.classList.remove(GREETING_SHOWING_CL);
    greetingText.classList.add(GREETING_SHOWING_CL);

    greetingText.appendChild(spanGreet);
    greetingText.appendChild(editIcon);
}

function loadUserName() {
    const loadedUserName = localStorage.getItem(USERNAME_LS);
    if (loadedUserName === null) {
        askForUserName();
    } else {
        todoContainer.classList.add(TODO_SHOWING_CL);
        // remove to be continue...
        paintGreeting(loadedUserName);
    }
}

function init() {
    loadUserName();
}
init();