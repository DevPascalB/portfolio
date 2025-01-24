function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}

function closeMenu() {
  const nav = document.querySelector('nav');
  nav.classList.remove('open');
}