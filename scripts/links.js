const pageURL = "https://baileynance.github.io/wdd230/";
const linksURL = "https://baileynance.github.io/wdd230/data/links.json";
const learningActivites = document.getElementById("home-la");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
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