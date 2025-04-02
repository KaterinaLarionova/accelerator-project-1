const VALID_NAME = /^[A-Za-zА-Яа-яЁё\s]+$/;
const VALID_PHONE = /^[\d\s\-()]+$/;
const MIN_LENGTH = 1;
const MAX_LENGTH = 30;

const form = document.querySelector('.free-lesson__form');
const nameInput = document.getElementById('input-name');
const phoneInput = document.getElementById('input-phone');
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  [nameInput, phoneInput].forEach((input) => {
    input.classList.remove('free-lesson__error');
  });

  [nameError, phoneError].forEach((span) => {
    span.classList.add('visually-hidden');
  });

  const phone = phoneInput.value.trim();
  const name = nameInput.value.trim();
  let isValid = true;


  if (!name || !isValidName(name)) {
    nameInput.classList.add('free-lesson__error');
    nameInput.classList.add('free-lesson__input--error');
    nameError.classList.remove('visually-hidden');
    nameError.textContent = 'Введите буквы и пробелы';
    isValid = false;
  } else if (name.length < MIN_LENGTH || name.length > MAX_LENGTH) {
    nameInput.classList.add('free-lesson__error');
    nameInput.classList.add('free-lesson__input--error');
    nameError.textContent = `Имя должно быть от ${MIN_LENGTH} до ${MAX_LENGTH} символов`;
    nameError.classList.remove('visually-hidden');
    isValid = false;
  }

  if (!phone || !isValidPhone(phone)) {
    phoneInput.classList.add('free-lesson__error');
    phoneInput.classList.add('free-lesson__input--error');
    phoneError.textContent = 'Введите цифры';
    phoneError.classList.remove('visually-hidden');
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});

function isValidPhone(phone) {
  return VALID_PHONE.test(phone);
}

function isValidName(name) {
  return VALID_NAME.test(name);
}
