let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.transform = 'translateX(0)';
      slide.style.display = 'block'; // Show the active slide
    } else {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
      slide.style.display = 'none'; // Hide the non-active slides
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);
