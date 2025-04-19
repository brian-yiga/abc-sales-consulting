
// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigationBar');
const menuLinks = document.querySelectorAll('.navigationBar ul li a');
const navBtn = document.querySelector('#navBtn');

function closeMenu() {
  navigationBar.classList.remove('show-nav');
}
  
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu(); 
  });
});

navBtn.addEventListener('click', () => {
  navBtn.addEventListener('click', () => {
    closeMenu();
  });  
});


hamburger.addEventListener('click', () => {
  navigationBar.classList.toggle('show-nav');
});




// Smooth Scrolling for testimonials on mobile
const testimonialsGrid = document.querySelector('.testimonialsGrid');

if (testimonialsGrid) {
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
}


// Photo Carousel
const tickerContainer = document.querySelector('.photoCarouselContainer');
const scrollSpeed = 1;
let isPaused = false;
let interactionTimeout; // To handle tap-and-hold for pause on touch

function scrollTicker() {
  if (!isPaused) {
    tickerContainer.scrollLeft += scrollSpeed;
    if (tickerContainer.scrollLeft > tickerContainer.scrollWidth / 2) {
      tickerContainer.scrollLeft = 0;
    }
  }
  requestAnimationFrame(scrollTicker);
}

scrollTicker();

function pauseOnInteractionStart() {
  isPaused = true;
}

function resumeOnInteractionEnd() {
  isPaused = false;
}

//Photo Modal
const tickerStrip = document.querySelector('.photoCarouselContainer'); // Make sure this selector is correct
const images = tickerStrip.querySelectorAll('img');
const imageTickerModal = document.getElementById('imageTickerModal');
const imageTickerModalImage = document.getElementById('imageTickerModalImage');
const imageTickerCloseButton = document.querySelector('.image-ticker-close-button');

// Event listener for clicks on the images
images.forEach(img => {
  img.addEventListener('click', () => {
    imageTickerModal.style.display = 'block'; // Show the modal
    imageTickerModalImage.src = img.src;     // Set the modal image source
    // Optional: Consider pausing the automatic scrolling here if you re-enable it
    // isPaused = true;
  });
});

// Event listener to close the modal
imageTickerCloseButton.addEventListener('click', () => {
  imageTickerModal.style.display = 'none';
  // Optional: If you paused scrolling, you might want to resume it here
  // isPaused = false;
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === imageTickerModal) {
    imageTickerModal.style.display = 'none';
    // Optional: If you paused scrolling, you might want to resume it here
    // isPaused = false;
  }
});

// Mouse events for desktop
tickerContainer.addEventListener('mouseenter', pauseOnInteractionStart);
tickerContainer.addEventListener('mouseleave', resumeOnInteractionEnd);
tickerContainer.addEventListener('click', () => {
  isPaused = !isPaused; // Toggle pause on click (desktop)
});

// Touch events for mobile and tablet
tickerContainer.addEventListener('touchstart', (event) => {
  pauseOnInteractionStart();
  // For a tap-and-hold pause, you could set a timeout here:
  // interactionTimeout = setTimeout(() => { isPaused = true; }, 500); // Pause after 500ms hold
});

tickerContainer.addEventListener('touchend', (event) => {
  resumeOnInteractionEnd();
  // Clear the timeout if the touch ends before the hold duration:
  // clearTimeout(interactionTimeout);
});

// Optional: Handle a quick tap as a toggle for pause on touch devices
let lastTapTime = 0;
tickerContainer.addEventListener('click', (event) => {
  const currentTime = new Date().getTime();
  const tapDelay = currentTime - lastTapTime;

  if (tapDelay < 300 && tapDelay > 0) { // Consider a quick double tap
    isPaused = !isPaused; // Toggle pause on quick tap
  }
  lastTapTime = currentTime;
});

//Modal Form

const modal = document.getElementById("contactFormModal");
  const btn = document.getElementById("newModalBtn");
  const closeBtn = document.querySelector(".form-close-button");

  if (modal && btn && closeBtn) {
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
}

  //STYLE CURRENT PAGE NAVIGATION LINK
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navigationBar ul li a');
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
      const linkPath = new URL(link.href, window.location.origin).pathname;

      if (linkPath === currentPage) {
        link.classList.add('active');
      }
    });
  });