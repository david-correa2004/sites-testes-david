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

  var swiper1 = new Swiper(".mySwiper2", {
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
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper3", {
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
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-insta", {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-insta",
      prevEl: ".swiper-button-prev-insta",
    },
    breakpoints: {
      800: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
      }
    }
  });
  var swiper1 = new Swiper(".mySwiper-img", {
      slidesPerView: 1,
      spaceBetween: 5,
      direction: "vertical",
      slidesPerGroup: 1,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-img",
        prevEl: ".swiper-button-prev-img",
      },
      breakpoints:{
        800:{
          slidesPerView: 1,
          spaceBetween: 25,
        }
      }
    });
  var swiper1 = new Swiper(".mySwiper-img2", {
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup: 1,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-img",
        prevEl: ".swiper-button-prev-img",
      },
      breakpoints:{
        800:{
          slidesPerView: 1,
          spaceBetween: 25,
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