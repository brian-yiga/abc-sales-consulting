const hamburger = document.querySelector('.hamburger');
const navigationBar = document.querySelector('.navigationBar');

hamburger.addEventListener('click', () => {
  navigationBar.classList.toggle('show-nav');
});