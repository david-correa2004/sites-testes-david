
const flips = document.querySelectorAll('.flip-container');

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

const btnmec = document.querySelector("#btn-mec")
const btnmarc = document.querySelector("#btn-marc")
const mec = document.querySelector("#mec")
const marc = document.querySelector("#marc")

btnmarc.onclick = () =>{
    mec.dataset.active = "false"
    marc.dataset.active = "true"
    btnmarc.dataset.active = "true"
    btnmec.dataset.active = "false"
}
btnmec.onclick = () =>{
    mec.dataset.active = "true"
    marc.dataset.active = "false"
    btnmarc.dataset.active = "false"
    btnmec.dataset.active = "true"
}


//mudança de tema
const lua = document.querySelector(".lua")
const sol = document.querySelector(".sol")
const body = document.querySelector("body")
// const boll = document.querySelector(".boll")
const back = document.querySelector("back")
const p = document.querySelector("p")
const h3 = document.querySelector("h3")
const h2 = document.querySelector(".h2")
const h22 = document.querySelector(".h22")
const h1 = document.querySelector("h1")
const btn = document.querySelector("#btn")

const noite = () => {
    body.style.background = '#f1f1f1';
    lua.style.opacity = '0';
    lua.style.display = 'none';
    sol.style.display = 'block';
    sol.style.opacity = '1';
    h1.style.color = '#1d1d1d';
    h2.style.color = '#1d1d1d';
    h22.style.color = '#1d1d1d';
    // back.classList.add('back-claro');
    h3.style.color = '#f1f1f1';
    p.style.color = '#f1f1f1';
    // btn.style.background = '#f1f1f1';
    // back.style.background = '#';
    btnmec.style.background = '#1d1d1d'
    btnmarc.style.background = '#1d1d1d'
    btnmec.style.color = '#f1f1f1'
    btnmarc.style.color = '#f1f1f1'
    
    btn.removeEventListener("click", noite)
    btn.addEventListener("click", dia)
}
const dia = () => {
    lua.style.opacity = '0';
    body.style.background = '#1d1d1d';
    // boll.style.left = '5px'
    // boll.style.right = 'auto'
    lua.style.opacity = '1';
    lua.style.display = 'block';
    sol.style.display = 'none';
    sol.style.opacity = '0';
    // back.style.background = '#1d1d1d';
    h1.style.color = '#f1f1f1';
    h2.style.color = '#f1f1f1';
    h22.style.color = '#f1f1f1';

    btnmec.style.background = '#f1f1f1'
    btnmarc.style.background = '#f1f1f1'
    btnmec.style.color = '#1d1d1d'
    btnmarc.style.color = '#1d1d1d'

    btn.removeEventListener("click", dia)
    btn.addEventListener("click", noite)
}
btn.addEventListener("click", dia)