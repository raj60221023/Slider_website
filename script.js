// script.js

const header = document.getElementById("header");
const sections = document.querySelectorAll(".section");
const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99'];

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            header.style.backgroundColor = colors[index];
        }
    });
});
