const VALID_NAME = /^[A-Za-zА-Яа-яЁё\s]+$/;
const VALID_PHONE = /^\+7\s\(\d{3}\)\s\d{3}\-\d{2}\-\d{2}$/;
const MIN_LENGTH = 1;
const MAX_LENGTH = 30;

const form = document.querySelector('.free-lesson__form');
const nameInput = document.getElementById('input-name');
const phoneInput = document.getElementById('input-phone');

form.addEventListener('submit', (event) => {
  let isValid = true;

  // Очистим предыдущие ошибки
  [nameInput, phoneInput].forEach((input) => {
    input.classList.remove('free-lesson__input--error');
    input.setCustomValidity('');
  });

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  // Проверка имени
  if (!VALID_NAME.test(name)) {
    nameInput.setCustomValidity('Имя может содержать только буквы и пробелы');
    nameInput.classList.add('free-lesson__input--error');
    isValid = false;
  } else if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
    nameInput.setCustomValidity(`Имя должно быть от ${MIN_LENGTH} до ${MAX_LENGTH} символов`);
    nameInput.classList.add('free-lesson__input--error');
    isValid = false;
  }

  // Проверка телефона
  if (!VALID_PHONE.test(phone)) {
    phoneInput.setCustomValidity('Введите телефон в формате: +7 (XXX) XXX-XX-XX');
    phoneInput.classList.add('free-lesson__input--error');
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
    form.reportValidity(); // Показываем ошибки
  }
});
