export function scrollToAnchor(e, id) {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
