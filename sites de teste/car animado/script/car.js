window.onload = ()=>{

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
        breakpoints:{
          800:{
            loop: true,
            slidesPerView: 4,
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