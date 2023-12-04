var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: 'true',
    loop: true,
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        520:{
            slidesPerView: 2,
        },
        920:{
            slidesPerView: 3,
        },
    },
  });