const body = document.querySelector("body");

const IMG_NUMBER = 5;
const IMG_CL = "bg-img";

function paintImg(num) {
    const image = new Image();
    image.src = `./images/${num + 1}.jpg`;
    image.classList.add(IMG_CL);
    body.prepend(image);
}

function genRandom() {
    const random = Math.floor(Math.random() * IMG_NUMBER);
    return random;
}

function init() {
    const randomNum = genRandom();
    paintImg(randomNum);
}
init();