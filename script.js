const toggle = document.getElementById('toggle-dark');

function applyTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

// Botón para alternar: solo cambia temporalmente hasta que el sistema lo sobreescriba
toggle.addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');
});

applyTheme();