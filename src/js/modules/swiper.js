const swiper = new Swiper('.values__cards', {
  grabCursor: true,
  spaceBetween: 8,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

// PROVIDE SLIDERS

const provideInfo = new Swiper('.provide__slider-info', {
  spaceBetween: 0,
  effect: 'fade',
  navigation: {
    nextEl: '.provide__button-next',
    prevEl: '.provide__button-prev',
  },
});

const provideGallery = new Swiper('.provide__gallery', {
  spaceBetween: 0,
  effect: 'fade',
  navigation: {
    nextEl: '.provide__button-next',
    prevEl: '.provide__button-prev',
  },
});
