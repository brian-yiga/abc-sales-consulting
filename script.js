
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigationBar');

hamburger.addEventListener('click', () => {
  navigationBar.classList.toggle('show-nav');
});


// Smooth Scrolling for testimonials on mobile
const testimonialsGrid = document.querySelector('.testimonialsGrid');
const testimonyCards = document.querySelectorAll('.testimonyCard');
let currentIndex = 0;
const slideInterval = 3000; 

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonyCards.length;
  testimonialsGrid.scrollTo({
    left: testimonialsGrid.offsetWidth * currentIndex,
    behavior: 'smooth'
  });
}

// Smooth Scrolling for testimonials on desktop
let intervalId = setInterval(nextSlide, slideInterval);

testimonialsGrid.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

testimonialsGrid.addEventListener('mouseleave', () => {
  intervalId = setInterval(nextSlide, slideInterval);
});


// Photo Carousel
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

//Modal Form

const modal = document.getElementById("contactFormModal");
  const btn = document.getElementById("newModalBtn");
  const closeBtn = document.querySelector(".form-close-button");

  btn.addEventListener('click', function() {
    console.log("New Open button clicked");
    modal.style.display = "block";
  });

  closeBtn.addEventListener('click', function() {
    console.log("Form Close button clicked");
    modal.style.display = "none";
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });