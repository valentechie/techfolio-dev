// Modo oscuro simple (cambia fondo y texto)
document.getElementById('toggle-dark').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
});