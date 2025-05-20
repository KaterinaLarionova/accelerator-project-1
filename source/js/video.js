document.addEventListener('DOMContentLoaded',() => {
  const videoWrapper = document.querySelector('.about__video-container');
  const playButton = videoWrapper.querySelector('.about__button');

  function loadVideo() {
    const iframe = document.createElement('iframe');
    iframe.classList.add('about__iframe');
    iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?si=FJOxqHGUDEom9jij&autoplay=1';
    iframe.loading = 'lazy';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;

    videoWrapper.innerHTML = '';
    videoWrapper.appendChild(iframe);
  }
  playButton.addEventListener('click', loadVideo);
});
