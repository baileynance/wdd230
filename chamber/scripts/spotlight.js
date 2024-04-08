const spotlight1 = document.getElementById('spotlight-1');
const spotlight1membership = document.getElementById('spotlight-1-membership');
const spotlight1other = document.getElementById('spotlight-1-other');

const spotlight2 = document.getElementById('spotlight-2');
const spotlight2membership = document.getElementById('spotlight-2-membership');
const spotlight2other = document.getElementById('spotlight-2-other');

const spotlight3 = document.getElementById('spotlight-3');
const spotlight3membership = document.getElementById('spotlight-3-membership');
const spotlight3other = document.getElementById('spotlight-3-other');

const membersInfo = "https://baileynance.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersInfo);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    spotlight1.setAttribute('src', members[2].image);
    spotlight1membership.textContent = `${members[2].membership}`;
    spotlight1other.textContent = `${members[2].other}`;

    spotlight2.setAttribute('src', members[4].image);
    spotlight2membership.textContent = `${members[4].membership}`;
    spotlight2other.textContent = `${members[4].other}`;

    spotlight3.setAttribute('src', members[1].image);
    spotlight3membership.textContent = `${members[1].membership}`;
    spotlight3other.textContent = `${members[1].other}`;
}

getMembers();