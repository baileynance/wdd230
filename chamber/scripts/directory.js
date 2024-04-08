// Grid vs List Styling

const gridbutton = document.getElementById('grid');
const listbutton = document.getElementById('list');
const display = document.getElementById('directory-grid');

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
})

const showList = () => {
    display.classList.add("grid");
}

// Dynamic Links

const membersInfo = "https://baileynance.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersInfo);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let article = document.createElement("article");

        let name = document.createElement("h3");
        name.textContent = member.name;
        let address = document.createElement("p");
        address.textContent = member.address;
        let phoneNumber = document.createElement("p");
        phoneNumber.textContent = member["phone-number"];
        let url = document.createElement("a");
        url.textContent = member.url;
        let img = document.createElement("img");
        img.setAttribute('src', member.image);
        img.setAttribute('alt', 'Member Logo');
        img.setAttribute('loading', 'lazy');
        let membership = document.createElement("p");
        membership.textContent = member.membership;
        let other = document.createElement("p");
        other.textContent = member.other;

        article.appendChild(name);
        article.appendChild(address);
        article.appendChild(phoneNumber);
        article.appendChild(url);
        article.appendChild(img);
        article.appendChild(membership);
        article.appendChild(other);

        display.appendChild(article);
    })
}

showList();
getMembers();
