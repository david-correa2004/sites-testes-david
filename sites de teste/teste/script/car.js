window.onload = ()=>{

    var swiper1 = new Swiper(".mySwiper", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -500],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      });
    var swiper1 = new Swiper(".mySwiper2", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -500],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      });
    // var swiper1 = new Swiper(".mySwiper2", {
    //     slidesPerView: 1,
    //     spaceBetween: 5,
    //     slidesPerGroup: 1,
    //     loop:true,
    //     loopFillGroupWithBlank: true,
    //     direction: "vertical",
    //     pagination: {
    //       el: ".swiper-pagination2",
    //       clickable: true,
    //     },
    //     breakpoints:{
    //       800:{
    //         slidesPerView: 1,
    //         spaceBetween: 80,
    //       }
    //     }
    //   });

}

/* 
    Importe este link no head no HTML:
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>

    Importe este link no footer:
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


*/