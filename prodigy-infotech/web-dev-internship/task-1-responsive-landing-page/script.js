const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1650) {
        navbar.style.backgroundColor = "#2b2b2b";
    }
    else if (window.scrollY > 1100) {
        navbar.style.backgroundColor = "#1a30a0";
    }
    else if (window.scrollY > 550) {
        navbar.style.backgroundColor = "#1b41ff";
    }
    else {
        navbar.style.backgroundColor = "#4c6afe";
    }
});

const newYear = new Date().getFullYear();
const yearUpdate = document.getElementById("footerYear");

yearUpdate.textContent = newYear;