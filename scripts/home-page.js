const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("Dark Mode")) {
        main.style.background = '#000000';
        main.style.color = "#FFFFFF";
		modeButton.textContent = "Light Mode";
	} else {
		main.style.background = "#FFFFFF";
        main.style.color = '#2E4052';
		modeButton.textContent = "Dark Mode";
	}
});
