const whats = document.querySelector('.whatsapp')
const popup = document.querySelector('#modal-whatsapp')



whats.onclick = () => {
    if (popup.dataset.active === 'false') {
        popup.dataset.active = 'true';
        whats.dataset.active = 'true';
        whats.style.right="300px"
        
    } else {
        whats.style.right="110px"
        whats.dataset.active = 'false';
        popup.dataset.active = 'false';
        
    };
}
// whats.onclick = () => {
//         whats.dataset.active = 'true';
// }


const inverso = document.querySelector('#inverso')
const insta = document.querySelector('.insta')
const facebook = document.querySelector('.facebook')

inverso.onclick = () => {
    // insta.dataset.active= 'true'
    if (inverso.dataset.active === 'false') {
        inverso.dataset.active = 'true';
        insta.dataset.active = 'true';
        facebook.dataset.active = 'true';
        insta.href = 'teste-facebook';
        facebook.href = 'teste-instagram';
        
    } else {
        
        insta.dataset.active = 'false';
        facebook.dataset.active = 'false';
        inverso.dataset.active = 'false';
        facebook.href = 'teste-facebook';
        insta.href = 'teste-instagram';
        
    };
}


const nav =document.querySelector('#disco-voador')
const img = document.querySelector('.img')

// const h1 = document.querySelector('#home1')

window.onscroll = () => {
    if(window.scrollY > 0){
        whats.style.right="110px"
        // h1.retorn="teste 1,2,3"
    }else{
        whats.style.right="-100px"
    };
    if(window.scrollY > 200 & window.scrollY < 800 || window.scrollY > 1400 & window.scrollY < 2000){
        img.style.transition= "all 3s cubic-bezier(.96,-0.12,.74,.94)"
        nav.dataset.active="true"
        img.style.bottom="100px"
        img.style.width="20px"
        img.style.height="20px"
        img.style.opacity=".5"
        whats.classList.add('whatsapp2')
        nav.onclick = () => {
            if (popup.dataset.active === 'false') {
                popup.dataset.active = 'true';
                whats.dataset.active = 'true';
                whats.style.right="300px"
                
            } else {
                whats.style.right="110px"
                whats.dataset.active = 'false';
                popup.dataset.active = 'false';
                
            };
        }
    }else{
        nav.dataset.active="false"
        img.style.bottom="10px"
        img.style.width="60px"
        img.style.height="60px"
        img.style.opacity="1"
        img.style.transition= "all .5s ease"
        whats.classList.remove('whatsapp2')
    };
};