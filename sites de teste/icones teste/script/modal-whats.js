const whats = document.querySelector('.whatsapp')
const popup = document.querySelector('#modal-whatsapp')



whats.onclick = () => {
    if (popup.dataset.active === 'false') {
        popup.dataset.active = 'true';
        whats.dataset.active = 'true';
        
    } else {
        
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