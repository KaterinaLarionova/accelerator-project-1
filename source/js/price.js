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

// Добавляем обработчики клика и фокуса на кнопки
filterButtons.forEach((button) => {
  button.addEventListener('click', handleButtonClick);
  button.addEventListener('focus', handleButtonClick);
});

// Функция обработки выбора кнопки
function handleButtonClick(event) {
  // Убираем активный класс у всех кнопок
  filterButtons.forEach((btn) => btn.classList.remove('filter__button--active'));

  // Добавляем активный класс к текущей кнопке
  event.target.classList.add('filter__button--active');

  // Получаем выбранный период из атрибута data-active
  const selectedPeriod = event.target.dataset.active;

  // Обновляем цены в карточках
  updatePrices(selectedPeriod);
}

// Функция для обновления цен в карточках
function updatePrices(period) {
  // Находим все карточки
  const cards = document.querySelectorAll('.price__item.card');

  // Обходим каждую карточку
  cards.forEach((card) => {
    const cardType = card.dataset.type; // Получаем значение data-type (trainer, day, full)
    const priceElement = card.querySelector('p.card__price span'); // Находим элемент с ценой
    const cardPrice = card.querySelector('p.card__price');

    if (prices[cardType] && priceElement && cardPrice) {
      const newPrice = prices[cardType][period]; // Получаем новую цену
      cardPrice.setAttribute('data-price', newPrice); // Устанавливаем новую data-price
      priceElement.textContent = newPrice; // Обновляем текстовое содержание цены
    }
  });
}
