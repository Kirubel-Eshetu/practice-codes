document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;

    if (!name || !email) {
        alert('Please fill in all fields.');
        e.preventDefault();
    }
});