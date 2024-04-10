const flips = document.querySelectorAll('#cont-doubts');

flips.forEach(flip => {

    flip.onclick = () => {

        flips.forEach(div => div.dataset.active = "false");

        if (flip.dataset.active === 'false') {

            flip.dataset.active = 'true';

        } else {

            flip.dataset.active = 'false';
            
        }
    }
})