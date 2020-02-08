const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-clock-title");

function paintTime() {

    const date = getTime();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hoursResult = `${hours < 10 ? `0${hours}` : hours}`;
    const minutesResult = `${minutes < 10 ? `0${minutes}` : minutes}`;
    const secondsResult = `${seconds < 10 ? `0${seconds}` : seconds}`;

    clockTitle.innerText = `${hoursResult}:${minutesResult}:${secondsResult}`;
}

function getTime() {
    return new Date();
}

function init() {
    paintTime();
    setInterval(paintTime, 1000);
}
init();