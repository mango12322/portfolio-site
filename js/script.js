const swiper = new Swiper(".about-slider", {
  slidesPerView: 2,
  // spaceBetween: 20,

  loop: true,

  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,

  breakpoints: {
    768: {
      slidesPerView: 5,
    },
    480: {
      slidesPerView: 3,
    },
  },
});
