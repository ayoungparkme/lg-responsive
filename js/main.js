const navOption = {
  nextEl: "#main-visual .btn-next",
  prevEl: "#main-visual .btn-prev",
};

const mainSlider = new Swiper("#main-visual", {
  effect: "fade",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  navigation: navOption,
  pagination: {
    el: ".pagination",
    type: "bullets",
    clickable: true,
  },
});

const introduceSlider = new Swiper("#introduce .banner", {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  //centeredSlides: true,
  navigation: {
    nextEl: "#introduce .btn-next",
    prevEl: "#introduce .btn-prev",
  },
});
const activitySlider = new Swiper("#activity  .banner", {
  slidesPerView: 4,
  slidesPerGroup: 4,
  loop: true,
  spaceBetween: 20,

  //centeredSlides: true,
  navigation: {
    nextEl: "#activity .btn-next",
    prevEl: "#activity .btn-prev",
  },
});
const noticeSlider = new Swiper("#notice  .banner", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 20,

  //centeredSlides: true,
  navigation: {
    nextEl: "#notice .btn-next",
    prevEl: "#notice .btn-prev",
  },
});
