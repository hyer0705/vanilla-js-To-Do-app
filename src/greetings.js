todoContainer = document.querySelector(".js-todo-container");
const TODO_SHOWING_CL = "todo-showing";

const greetingContainer = document.querySelector(".js-greeting"),
    greetingForm = greetingContainer.querySelector(".js-username-form"),
    greetingText = greetingContainer.querySelector(".js-greeting__text"),
    greetingInput = greetingForm.querySelector(".js-username-input");

const USERNAME_LS = "username";
const GREETING_SHOWING_CL = "greeting-showing";

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

function handleSubmit(event) {
    event.preventDefault();

    const inputName = greetingInput.value;
    paintGreeting(inputName);
    saveUserName(inputName);
    todoContainer.classList.add(TODO_SHOWING_CL);
}

function askForUserName() {
    greetingForm.classList.add(GREETING_SHOWING_CL);

    greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(name) {
    const currentUserName = name;
    const greeting = getGreeting();

    greetingForm.classList.remove(GREETING_SHOWING_CL);
    greetingText.classList.add(GREETING_SHOWING_CL);

    greetingText.innerText = `${greeting}! ${currentUserName}`;
}

function checkUserName() {
    const isName = localStorage.getItem(USERNAME_LS);
    // console.log(isName);
    if (isName !== null) {
        test.classList.add(TODO_SHOWING_CL);
    } else {
        test.classList.remove(TODO_SHOWING_CL);
    }
}

function loadUserName() {
    const loadedUserName = localStorage.getItem(USERNAME_LS);
    if (loadedUserName === null) {
        askForUserName();
        // checkUserName();
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