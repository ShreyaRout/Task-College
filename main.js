let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
        if (i === index) {
            slide.classList.add('active');  // Show the active slide
        } else {
            slide.classList.remove('active');  // Hide other slides
        }
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);
