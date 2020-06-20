const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function() {
    const courseId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src= `https://rocketseat.com.br/${courseId}`
  });
}

document.querySelector('.close-modal').addEventListener('click', function() {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector('iframe').src = '';

  if (modalOverlay.classList.contains('maximize')) {
    modalOverlay.classList.remove('maximize');
    modalOverlay.querySelector('.maximize-modal').textContent = 'maximize';
  }
});

modalOverlay.querySelector('.maximize-modal').addEventListener('click', function() {
  if (modalOverlay.classList.contains('maximize')) {
    modalOverlay.classList.remove('maximize');
    modalOverlay.querySelector('.maximize-modal').textContent = 'maximize';
  } else {
    modalOverlay.classList.add('maximize');
    modalOverlay.querySelector('.maximize-modal').textContent = 'minimize';
  }
});

