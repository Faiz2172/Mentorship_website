let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === slideIndex) {
            slide.classList.add('active');
        }
    });

    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

setInterval(showSlides, 3000);
