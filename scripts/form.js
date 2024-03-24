// Rating

const rangevalue = document.getElementById("rangeValue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// Password Matching

const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");
const matching = document.querySelector("#matching");

confPassword.addEventListener("focusout", checkSame);

function checkSame() {
	if (password.value !== confPassword.value) {
		matching.textContent = "*Passwords Do Not Match";
		matching.style.visibility = "show";
        matching.style.margin = "0.8rem";
        matching.style.color = "red";
		confPassword.style.backgroundColor = "#fff0f3";
		confPassword.value = "";
		confPassword.focus();
	} else {
		matching.style.display = "none";
		confPassword.style.backgroundColor = "#fff";
		confPassword.style.color = "#000";
	}
}
