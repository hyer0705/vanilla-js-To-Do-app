const WEATHER_API = "2904e2df641fb313f72205a657662958";
const COORDS_LS = "coords";

const weather = document.querySelector(".js-weather");

const CITYNAME_CL = "weather__city-name";
const IMAGE_CL = "weather__img";
const TEMPARATURE_CL = "weather__temparature";
const ICON_CL = "weather__icon-desc";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        // console.log(json.weather[0].icon);
        const spanCity = document.createElement("span");
        const cityName = json.name;
        spanCity.classList.add(CITYNAME_CL);
        spanCity.innerText = cityName;

        const image = document.createElement("img");
        const icon = json.weather[0].icon;
        image.classList.add(IMAGE_CL);
        image.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        const spanTemp = document.createElement("span");
        const temp = json.main.temp;
        spanTemp.classList.add(TEMPARATURE_CL);
        spanTemp.innerText = `${temp}°`;

        const spanIconDesc = document.createElement("span");
        const iconDesc = json.weather[0].description;
        spanIconDesc.classList.add(ICON_CL);
        spanIconDesc.innerText = iconDesc;

        weather.appendChild(spanCity);
        weather.appendChild(image);
        weather.appendChild(spanTemp);
        weather.appendChild(spanIconDesc);
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function successPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function failedPosition() {
    console.log("Can't get position...");
    alert("Can't get position...\nPlease, press Allow location permission!");
    // navigator.geolocation.getCurrentPosition(successPosition, failedPosition);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(successPosition, failedPosition);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);

    if (loadedCoords === null) {
        // 경도 위도 묻기
        askForCoords();
    } else {
        // weather API 사용
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}
init();