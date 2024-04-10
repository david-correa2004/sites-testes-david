const openBtn = document.querySelector('#menu__btn');
const closeBtn = document.querySelector('#close__btn');
const sidebarNav = document.querySelector("#sidebar__nav");
const lis = document.querySelectorAll("#sidebar__nav ul li");

lis.forEach(li => {
    li.onclick = () => {
        sidebarNav.dataset.active = "false";
    }
})

openBtn.onclick = () => {
    sidebarNav.dataset.active = "true";
}

closeBtn.onclick = () => {
    sidebarNav.dataset.active = "false";
}

const nav = document.querySelector("header");

const whatsflut = document.querySelector(".btn-flut");

window.onscroll = () => {
    if(window.scrollY > 0){
        nav.dataset.active="true"
    }else{
        nav.dataset.active="false"
    };
    if(window.scrollY > 0){
        whatsflut.dataset.active="true"
    }else{
        whatsflut.dataset.active="false"
    }
}



const icons = document.querySelectorAll('.icon');

icons.forEach(icn => {

    icn.onclick = () => {

        icons.forEach(div => div.dataset.active = "false");

        if (icn.dataset.active === 'false') {

            icn.dataset.active = 'true';

        }
    }
})