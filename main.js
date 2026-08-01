document.querySelector('.search-area input').addEventListener('input', function (e) {
    const filterText = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.grid-squad .card');

    cards.forEach(card => {
        const name = card.querySelector('.member-name').textContent.toLowerCase();
        const absen = card.querySelector('.member-absen').textContent.toLowerCase();

        if (name.includes(filterText) || absen.includes(filterText)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

let currentIndex = 0;
const card = document.getElementById('slideshow-card');

function changeBackgroundImage() {
    card.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 3000);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("aktive");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("aktive");
        }
    });
});