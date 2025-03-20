document.addEventListener('DOMContentLoaded',() => {
  const videoWrapper = document.querySelector('.about__video-container');
  const playButton = videoWrapper.querySelector('.about__button');

  function loadVideo() {
    const iframe = document.createElement('iframe');
    iframe.classList.add('about__iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=FJOxqHGUDEom9jij&autoplay=1'; // Замени VIDEO_ID на реальный ID видео
    iframe.loading = 'lazy';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    videoWrapper.innerHTML = ''; // Очищаем div, убирая картинку и кнопку
    videoWrapper.appendChild(iframe); // Вставляем iframe
  }
  playButton.addEventListener('click', loadVideo);
});
