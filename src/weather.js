const WEATHER_API = "2904e2df641fb313f72205a657662958";
const COORDS_LS = "coords";

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
    }
}

function init() {
    loadCoords();
}
init();