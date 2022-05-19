// Year update
document.querySelector('.year').textContent = new Date().getFullYear();

// Mobile nav
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});
