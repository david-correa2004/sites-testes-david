const cube = document.querySelectorAll('.cube');

cube.forEach(side => {

    side.onclick = () => {

        cube.forEach(div => div.dataset.active = "false");

        if (side.dataset.active === 'false') {

            side.dataset.active = 'true';

        } else {

            side.dataset.active = 'false';
            
        }
    }
})