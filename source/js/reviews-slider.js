import Swiper from './vendor/swiper.mjs';
import Mousewheel from './vendor/modules/mousewheel.mjs';
import Navigation from './vendor/modules/navigation.mjs';

new Swiper('.reviews__swiper', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  loop: true,
  speed: 700,
  watchOverflow: true,
  centeredSlides: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 1,
      simulateTouch: true,
      spaceBetween: 10,
    },
    768: {
      simulateTouch: true,
      spaceBetween: 10,
    },
    1366: {
      simulateTouch: false,
      spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: {
    invert: true,
    forceToAxis: true,
    sensitivity: 2,
    releaseOnEdges: true,
  },
});
