// Grid vs List Styling

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory-grid");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// Dynamic Links

const pageURL = "https://baileynance.github.io/wdd230/";
const linksURL = "https://baileynance.github.io/wdd230/chamber/data";
const learningActivites = document.getElementById("home-la");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let activity = document.createElement("li");
        let links = "";
        week.links.forEach((link) => {
            links += `<a href="${link.url}">${link.title}</a>`;
        })
        activity.innerHTML = `${week.weeks}: ${links}`;
        learningActivites.appendChild(activity);
    })
}

getLinks();
