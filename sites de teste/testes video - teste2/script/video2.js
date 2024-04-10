/* Eventos do video :
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event

*/


window.onload = Iniciar;
var elementoVideo;
var barraProgresso;
var duracaoTotal;
var update;
function Iniciar() {
    elementoVideo = document.querySelector('#video');
    barraProgresso = document.querySelector('#barra-progresso');
    duracaoTotal = elementoVideo.duration;
    update = setInterval(atualizarBarra, 20);
}

function atualizarBarra() {
    if (!elementoVideo.paused) {
        var resultado = (101 * elementoVideo.currentTime) / duracaoTotal;
        barraProgresso.style.width = parseInt(resultado) + '%';
    };
    if (barraProgresso.style.width === '100%') {
        mutedd.style.display = 'flex';
        mutedd.style.borderRadius = '500px';
        mutedd.style.width = '17%';
        mutedd.style.height = '30%';
        img.style.width = '100%';
        img.src = "./assets/icon/play.svg";
        cont_after.style.display = 'block';
        img.style.left = '2px';
        btn1.style.display = 'none';
    };
    if (barraProgresso.style.width === '1%') {
        btn1.style.display = 'block';
    };
}



const btn1 = document.querySelector('#btn1')
const cont_after = document.querySelector('.cont-after')
const video_fundo = document.querySelector('#video-fundo')
const video = document.querySelector('#video')
const mutedd = document.querySelector('#mutedd')
const img = document.querySelector('#img')
const h3 = document.querySelector('#h3')
const p = document.querySelector('#p')

const muted = () => {
    video.muted = false;
    video.autoplay = (true);
    video.style.display = 'block';
    video_fundo.style.display = 'none';
    mutedd.style.display = 'none';
    img.style.width = '0px';
    h3.style.display = 'none';
    p.style.display = 'none';
    cont_after.style.display = 'none';
    if (video.paused)
        video.play();
    else
        video.pause();
}
video.onclick = () => {
    mutedd.style.display = 'flex';
    mutedd.style.borderRadius = '500px';
    mutedd.style.width = '17%';
    mutedd.style.height = '30%';
    img.style.width = '100%';
    img.style.left = '2px';
    img.src = "./assets/icon/play.svg";
    cont_after.style.display = 'block';
    if (video.paused)
        video.play();
    else
        video.pause();
    mutedd.removeEventListener("click", muted)
    mutedd.addEventListener("click", play)
}
const play = () => {
    mutedd.style.display = 'none';
    img.style.width = '0px';
    img.classList.remove('muted');
    cont_after.style.display = 'none';
    if (video.paused)
        video.play();
    else
        video.pause();
}
mutedd.addEventListener("click", muted)