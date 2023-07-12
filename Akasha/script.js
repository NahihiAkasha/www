window.addEventListener('DOMContentLoaded', (event) => {
  const videoElement = document.querySelector('video');

  setTimeout(() => {
    videoElement.classList.add('unblur');
  }, 700);
});
