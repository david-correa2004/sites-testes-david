window.onload = () => {

  var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    rewind: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-img", {
    effect: "coverflow",
    spaceBetween: 25,
    centeredSlides: true,
    slidesPerView: 1,
    loop:"true",
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination-img",
          // dynamicBullets: true,
          clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-img",
      prevEl: ".swiper-button-prev-img",
    },
    breakpoints: {
      800: {
        spaceBetween: 25,
        slidesPerView: 2.35,
        coverflowEffect: {
          modifier: 1,
          slideShadows: true,
          spaceBetween: 0,
        },
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-mob", {
    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination-mob",
      dynamicBullets: false,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-mob",
      prevEl: ".swiper-button-prev-mob",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
      }
    }
  });
  
   var swiper = new Swiper(".mySwiper-dep", {
    effect: "coverflow",
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 2.4,
    loop:"true",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination-dep",
          // dynamicBullets: true,
          clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-dep",
      prevEl: ".swiper-button-prev-dep",
    },
    breakpoints: {
      800: {
        coverflowEffect: {
          modifier: 1,
          slideShadows: true,
          spaceBetween: 0,
        },
      }
    }
  });
  


}

/* 
    Importe este link no head no HTML:
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

    Importe este link no footer:
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


*/