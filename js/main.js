document.addEventListener('DOMContentLoaded', () => {
  if (location.search.includes('e=1')) {
    const error = document.querySelector('.error-message');
    if (error) error.style.display = 'block';
  }
});

