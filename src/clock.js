const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-clock-title");

function getTime() {
    const date = new Date();

    const hours = date.getHours();
    const hoursResult = `${hours < 10 ? `0${hours}` : hours}`;

    const minutes = date.getMinutes();
    const minutesResult = `${minutes < 10 ? `0${minutes}` : minutes}`;

    const seconds = date.getSeconds();
    const secondsResult = `${seconds < 10 ? `0${seconds}` : seconds}`;

    clockTitle.innerText = `${hoursResult}:${minutesResult}:${secondsResult}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();