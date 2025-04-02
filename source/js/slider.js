import Swiper from './vendor/swiper.mjs';
import Mousewheel from './vendor/modules/mousewheel.mjs';
import Navigation from './vendor/modules/navigation.mjs';

new Swiper('.juri__swiper', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  loop: true,
  speed: 700,
  watchOverflow: true,
  centeredSlides: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 0,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      simulateTouch: true,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
    }
  },
  navigation: {
    nextEl: '.juri__button--next',
    prevEl: '.juri__button--prev',
  },
  mousewheel: {
    invert: true,
    forceToAxis: true,
    sensitivity: 2,
    releaseOnEdges: true,
  },
});

