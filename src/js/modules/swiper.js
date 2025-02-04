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
