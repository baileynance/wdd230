const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.getElementById("weather-desc");

const currentTemp2 = document.getElementById("current-temp-2");
const weatherIcon2 = document.getElementById("weather-icon-2");
const captionDesc2 = document.getElementById("weather-desc-2");

const currentTemp3 = document.getElementById("current-temp-3");
const weatherIcon3 = document.getElementById("weather-icon-3");
const captionDesc3 = document.getElementById("weather-desc-3");

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=30.271773245227827&lon=-97.74758794277341&exclude={part}&appid=c61d2f046832a245f9f101e3b4de22b5&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;

    currentTemp2.innerHTML = `${data.list[8].main.temp}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`
    let desc2 = data.list[8].weather[0].description;
    weatherIcon2.setAttribute("src", iconsrc2);
    weatherIcon2.setAttribute("alt", desc2);
    captionDesc2.textContent = `${desc2}`;

    currentTemp3.innerHTML = `${data.list[16].main.temp}&deg;F`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
    let desc3 = data.list[16].weather[0].description;
    weatherIcon3.setAttribute("src", iconsrc3);
    weatherIcon3.setAttribute("alt", desc3);
    captionDesc3.textContent = `${desc3}`;
}

apiFetch();