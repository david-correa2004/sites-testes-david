const whatsflut = document.querySelector(".btn-flut");

window.onscroll = () => {
    if(window.scrollY > 0){
        whatsflut.dataset.active="true"
    }else{
        whatsflut.dataset.active="false"
    };
};

const conts = document.querySelectorAll('#conts-duvids');

conts.forEach(cont => {

    cont.onclick = () => {

        conts.forEach(div => div.dataset.active = "false");

        if (cont.dataset.active === 'false') {

            cont.dataset.active = 'true';

        } else {

            cont.dataset.active = 'false';
            
        }
    }
})