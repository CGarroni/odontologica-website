document.addEventListener('DOMContentLoaded', function() {
  const detailButtons = document.querySelectorAll('.btn-details');

  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const service = this.dataset.servico;
      const detailsDiv = document.getElementById(`${service}-details`);

      if (detailsDiv) {
        detailsDiv.classList.toggle('ocult');
      }
    });
  });
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  const navLinks = document.querySelectorAll('#nav-menu li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
});