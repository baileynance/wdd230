const msToDays = 84600000;
let lastVisit = localStorage.getItem("last-visit");
let latestVisit = Date.now();

const messageDisplay = document.getElementById("visit-message");

compareDates = () => {
    if (lastVisit !== null) {
        let timeSince = (latestVisit - lastVisit) / msToDays;
        if (timeSince < 1) {
            messageDisplay.textContent = "Back so soon! Awesome!"
        } else if (timeSince >= 1 && timeSince < 2) {
            messageDisplay.textContent = `You last visited ${Math.floor(timeSince)} day ago.`
        } else {
            messageDisplay.textContent = `You last visited ${Math.floor(timeSince)} days ago.`
        }
        setLastVisit();
    } else {
        messageDisplay.textContent = "Welcome! Let us know if you have any questions.";
    }
}

setLastVisit = () => {
    localStorage.setItem("last-visit", latestVisit);
}

compareDates();