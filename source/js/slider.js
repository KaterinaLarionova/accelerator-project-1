import Swiper from 'swiper';
import {Mousewheel, Navigation} from 'swiper/modules';

new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Mousewheel],
  //direction: 'horizontal',
  loop: true,
  speed: 700,
  watchOverflow: true,
  //centeredSlides: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      simulateTouch: false,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      simulateTouch: false,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: {
    invert: true,
    forceToAxis: true,
    sensitivity: 2,
  },
});

