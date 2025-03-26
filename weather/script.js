const apiKey = "bc0066c2bd39bc9a2b4291b3b02f50c9";
const cityIn = document.getElementById("cityIn");
const searchBtn = document.getElementById("searchBtn");
const city = document.getElementById("city");
const wIcon = document.getElementById("wIcon");
const temp = document.getElementById("temp");
const desc = document.getElementById("desc");

// current lokaciistvis
document.addEventListener("DOMContentLoaded", () => {
    
    if (navigator.geolocation) {
        navigator.geolocation.getPos(
            pos => {
                getWeather(pos.coords.latitude, pos.coords.longitude);
            },
            () => {
                getWeatherData("Tbilisi"); 
            }
        );
    } else {
        getWeatherData("Tbilisi"); 
    }

    searchBtn.addEventListener("click", search);
    cityIn.addEventListener("keypress", e => {
        if (e.key === "Enter") search();
    });
});

// mogkavs inputidan value tu sworia(VALID aris:D) vidzaxebt fetchWeatherData funkcias tuarada gamogvak error msg:)
async function search() {
    const query = cityIn.value.trim();
    if (query) {
        getWeatherData(query);
    }
}

async function getWeatherData(city) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();
        showWeather(data);
    } catch (error) {
        getWeatherData("Tbilisi"); 
        console.error("Fetch error:", error);
    }
}

async function getWeather(lat, lon) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
        );
        const data = await res.json();
        showWeather(data);
    } catch (error) {
        getWeatherData("Tbilisi"); 
    }
}

// DZALIAN rtuli misaxvedria magram es funkcia imistvisaa ro websiteze gamovitanot info(⊙_⊙)
function showWeather(data) {
    if (city.querySelector(".loading")) {
        city.innerHTML = data.name;
    } else {
        city.textContent = data.name;
    }

    temp.textContent = `${Math.round(data.main.temp)}°C`;
    desc.textContent = data.weather[0].description;
    wIcon.src = getIcon(data.weather[0].main.toLowerCase());
    wIcon.alt = data.weather[0].main;
}


// AMINDIS POOTEBISTVIS:DDD
function getIcon(condition) {
    const icons = {
        "rain": "img/rain.png",
        "clear": "img/sun.png",
        "snow": "img/snow.png",
        "clouds": "img/cloud.png",
        "mist": "img/mist.png",
        "haze": "img/haze.png",
        "thunderstorm": "img/thunderstorm.png"
    };
    return icons[condition] || "img/sun.png"; 
}