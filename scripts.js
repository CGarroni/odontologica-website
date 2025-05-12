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
});