let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: 'custom'
    },
    breakpoints: {
      751: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1001: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  });