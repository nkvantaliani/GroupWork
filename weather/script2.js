const apiKey = "1e3e8f230b6064d27976e41163a82b77";
const favsCont = document.getElementById("favs-cont");
const addBtn = document.getElementById("add-btn");
const favIn = document.getElementById("fav-in");

document.addEventListener("DOMContentLoaded", loadFavs);

//event listener favebistvis:D .. ENTERZE da daclickebaze
addBtn.addEventListener("click", addFav);
favIn.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addFav();
});

//amatebs axal favebs da amowmebs
function addFav() {
    const city = favIn.value.trim();
    
    if (!city) return; //vaignorebt da varejectebt da kvelaperi cudi cariel inputs

    // vamowmebt ro namdvilad arsebobs shemokvanili city
    getWeather(city)
        .then(data => {
            // vinaxavt axal qalaqs
            saveFav(data.name);
            favIn.value = ""; 
            loadFavs();
        })
        .catch(error => {
            // tu ver ikna namovni shemokvanili qalaqi mashin gamogvaks error
            console.error("Error adding favorite:", error);
        });
}

// vinaxavt favebs localstorageshi
function saveFav(city) {
    const favs = getFavs();
    // vamowmebt ukve gvakvs tu ara shemokvanili qalaqi ukve localstorageshi
    if (!favs.includes(city)) {
        favs.push(city);
        localStorage.setItem("weatherFavs", JSON.stringify(favs));
    }
    // msg gamochena amoishala
}

function getFavs() {
    return JSON.parse(localStorage.getItem("weatherFavs")) || [];
}

// gamoakvs qalaqebi
function loadFavs() {
    const favs = getFavs();
    favsCont.innerHTML = "";

    // kvela qalaqistvis calke promise 
    const promises = favs.map(city => 
        getWeather(city).catch(e => ({ name: city }))
    );
    
    Promise.all(promises)
        .then(data => {
            favsCont.innerHTML = "";
            data.forEach(item => createFav(item));
        })
        .catch(error => {
            console.error("not able to load favs:", error);
        });
}

async function getWeather(city) {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    
    if (data.cod !== 200 && data.cod !== "200") {
        throw new Error(data.message || "City not found");
    }
    
    return data;
}

function createFav(data) {
    const item = document.createElement("div");
    item.className = "fav-item";
    item.dataset.city = data.name;
    
    const weather = data.weather ? data.weather[0].main.toLowerCase() : "clear";
    const icon = getIcon(weather);
    const temp = data.main ? `${Math.round(data.main.temp)}°C` : "--";

    // vkmnit htmlis strukturas
    item.innerHTML = `
        <div class="fav-weather">
            <img src="${icon}" alt="${weather}">
        </div>
        <div class="fav-info">
            <div class="fav-name">${data.name}</div>
            <div class="fav-temp">${temp}</div>
        </div>
        <button class="remove-btn" aria-label="Remove ${data.name}">
            <i class="fas fa-times"></i>
        </button>
    `;

    item.querySelector(".remove-btn").addEventListener("click", () => {
        removeFav(data.name);
    });

    favsCont.appendChild(item);
}

function removeFav(city) {
    let favs = getFavs();
    favs = favs.filter(f => f.toLowerCase() !== city.toLowerCase());
    
    // vamowmebt ro namdvilad waishala city 
    if (favs.length === getFavs().length) {
        return; // msg gamochena amoishala
    }
    
    localStorage.setItem("weatherFavs", JSON.stringify(favs));
    
    // htmlidanac vshlit
    const toRemove = document.querySelector(`.fav-item[data-city="${city}"]`);
    if (toRemove) {
        toRemove.remove();
    }
    
    // tu agaraperi agaraa realoads vaketebgt
    if (favs.length === 0) {
        loadFavs();
    }
}

function getIcon(weather) {
    const icons = {
        "rain": "img/rain.png",
        "clear": "img/sun.png",
        "snow": "img/snow.png",
        "clouds": "img/cloud.png",
        "mist": "img/mist.png",
        "haze": "img/haze.png"
    };
    return icons[weather] || "img/sun.png";
}