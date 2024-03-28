const date = document.getElementById("time");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    date.value = Date.now();
})