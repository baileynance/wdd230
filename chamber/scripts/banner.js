const day =  new Date();
const today = day.getDay();
const banner = document.getElementById('banner');
const close = document.getElementById('close');

close.addEventListener('click', () => {
    banner.style.display = "none";
})

const showBanner = () => {
    if (today == 0 || today == 4 || today == 5 || today == 6) {
        banner.style.display = "none";
    }
}

showBanner();