// Grid vs List Styling

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory-grid");

gridbutton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
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
        let section = document.createElement("section");
        display.appendChild(section);

        let name = document.createElement("h3");
        name.textContent = member.name;
        let address = document.createElement("p");
        address.textContent = member.address;
        let phoneNumber = document.createElement("p");
        phoneNumber.textContent = member["phone-number"];
        let url = document.createElement("a");
        url.textContent = member.url;
        let img = document.createElement("img");
        img.textContent = member.image;
        let membership = document.createElement("p");
        membership.textContent = member.membership;
        let other = document.createElement("p");
        other.textContent = member.other;

        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(url);
        section.appendChild(img);
        section.appendChild(membership);
        section.appendChild(other);
    })
}

getMembers();
