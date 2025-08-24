const toggle = document.getElementById('toggle-dark');
toggle.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
  // Guarda preferencia
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Al cargar la página, revisa preferencia
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}