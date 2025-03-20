document.querySelectorAll('.faq__details').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open) {
      details.classList.add('faq__details--open');
      details.classList.remove('faq__details--close');
    } else {
      details.classList.add('faq__details--close');
      details.classList.remove('faq__details--open');
    }

    const button = details.querySelector('.faq__button');
    if (button) {
      if (details.open) {
        button.classList.add('faq__button--open');
        button.classList.remove('faq__button--close');
      } else {
        button.classList.add('faq__button--close');
        button.classList.remove('faq__button--open');
      }
    }
  });
});
