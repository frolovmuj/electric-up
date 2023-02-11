const swiperCard = () => {
    let flag = true;
    window.innerWidth >= 768 ? flag = true : flag = false;
    if (flag) {
    swiper = new Swiper('.rewiews__clients', {
      grabCursor: true,
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: true,
    });
  } else {
   const slides = document.querySelectorAll('.swiper-slide')
   slides.forEach((slide) => {
    slide.classList.remove('swiper-slide')
    slide.classList.add('rewiews__item')
   })
   const swiperSlider = document.querySelector('.swiper-wrapper')
   swiperSlider.classList.remove('swiper-wrapper')
   swiperSlider.classList.add('rewiews__container')
  }
};
swiperCard();
// window.addEventListener('resize', swiperCard)


