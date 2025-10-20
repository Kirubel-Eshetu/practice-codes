const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1650) {
        navbar.style.backgroundColor = '#000000';
    }
    else if (window.scrollY > 1100) {
        navbar.style.backgroundColor = '#001a9f';
    }
    else if (window.scrollY > 550) {
        navbar.style.backgroundColor = '#002aff';
    }
    else {
        navbar.style.backgroundColor = '#4060fd';
    }
});