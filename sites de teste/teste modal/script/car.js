
// var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
//   rewind:true,
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//   },
// });

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination1",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev1",
    nextEl: ".swiper-button-next1",
  },
  breakpoints: {
    800: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
})