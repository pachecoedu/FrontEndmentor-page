function toggleMenu() {
  let menu = document.querySelector('.menu');
  menu.classList.toggle('open');
  
  let navbarToggle = document.querySelector('.navbar-toggle');
  navbarToggle.classList.toggle('open');

  defocus(menu);
}

function defocus(menu) {
  if (menu.classList.contains('open')) {
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  } else {
    let overlay = document.querySelector('.overlay');
    if (overlay) {
      document.body.removeChild(overlay);
    }
  }
}