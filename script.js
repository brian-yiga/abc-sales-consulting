const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigationBar');

hamburger.addEventListener('click', () => {
  navigationBar.classList.toggle('show-nav');
});

const testimonialsGrid = document.querySelector('.testimonialsGrid');
const testimonyCards = document.querySelectorAll('.testimonyCard');
let currentIndex = 0;
const slideInterval = 5000; // Time in milliseconds between slides (adjust as needed)

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonyCards.length;
  testimonialsGrid.scrollTo({
    left: testimonialsGrid.offsetWidth * currentIndex,
    behavior: 'smooth'
  });
}

// Start the automatic sliding
let intervalId = setInterval(nextSlide, slideInterval);

// Optional: Pause on hover (if you want to allow user interaction)
testimonialsGrid.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

testimonialsGrid.addEventListener('mouseleave', () => {
  intervalId = setInterval(nextSlide, slideInterval);
});

const carouselContainer = document.querySelector('.photoCarouselContainer');
const carousel = document.querySelector('.photoCarousel');
const images = document.querySelectorAll('.photoCarousel img');

if (carouselContainer && carousel && images.length > 0) {
  carouselContainer.addEventListener('mousemove', (e) => {
    const containerWidth = carouselContainer.offsetWidth;
    const mouseX = e.clientX - carouselContainer.getBoundingClientRect().left;
    const scrollAmount = (mouseX / containerWidth - 0.5) * (carousel.scrollWidth - containerWidth);
    carousel.style.transform = `translateX(${-scrollAmount}px)`;
  });
}