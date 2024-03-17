const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('copy-year').innerText = new Date().getFullYear();