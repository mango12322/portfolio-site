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

// top-Arrow
const topArrow = document.querySelector(".top-arrow");
topArrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// on/off
const header = document.querySelector(".header");
const github = document.querySelector(".github");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("on");
    topArrow.style.display = "flex";
    github.style.display = "flex";
  } else {
    header.classList.remove("on");
    topArrow.style.display = "none";
    github.style.display = "none";
  }
});
