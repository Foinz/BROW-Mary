// захват элементов
const modal = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');

// ищем все картинки
const galleryImages = document.querySelectorAll('.gallery-item img');

//клик - открытие модалки
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src; //подставляем имг в модалку
    modal.classList.add('active'); //дисплей во флекс показываем модалку
  });
});
// кликаем overlav - закрываем модалку

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// бургер и скрытие навигации

const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});