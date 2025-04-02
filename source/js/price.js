const prices = {
  trainer: {
    1: 5000,
    6: 30000,
    12: 60000
  },
  day: {
    1: 1700,
    6: 10200,
    12: 20400
  },
  full: {
    1: 2700,
    6: 16200,
    12: 32400
  }
};

const filterButtons = document.querySelectorAll('.filter__button');

filterButtons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
  button.addEventListener('focus', handleButtonClick);
});

function handleButtonClick(event) {
  filterButtons.forEach((btn) => btn.classList.remove('filter__button--active'));
  event.target.classList.add('filter__button--active');
  const selectedPeriod = event.target.dataset.active;
  updatePrices(selectedPeriod);
}

function updatePrices(period) {
  const cards = document.querySelectorAll('.price__item.card');
  cards.forEach((card) => {
    const cardType = card.dataset.type;
    const priceElement = card.querySelector('p.card__price span');
    const cardPrice = card.querySelector('p.card__price');
    if (prices[cardType] && priceElement && cardPrice) {
      const newPrice = prices[cardType][period];
      cardPrice.setAttribute('data-price', newPrice);
      priceElement.textContent = newPrice;
    }
  });
}
