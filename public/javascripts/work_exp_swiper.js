let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: 'custom'
    },
    breakpoints: {
      800: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  });