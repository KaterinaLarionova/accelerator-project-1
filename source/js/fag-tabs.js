document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filter-faq__button');
  const faqLists = document.querySelectorAll('.faq__list');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedCategory = tab.getAttribute('data-category');

      // Убираем "active" у всех табов
      tabs.forEach((tubItem) => tubItem.classList.remove('filter-faq__button--active'));
      tab.classList.add('filter-faq__button--active');

      // Показываем только нужную категорию
      faqLists.forEach((list) => {
        if (list.getAttribute('data-category') === selectedCategory) {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });
});

document.querySelectorAll('.faq__list').forEach((list) => {
  list.style.display = 'none';
});
document.querySelector('.faq__list[data-category="center"]').style.display = 'block';
