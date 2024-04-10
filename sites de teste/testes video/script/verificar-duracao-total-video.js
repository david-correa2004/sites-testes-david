window.onload = Iniciar;

var elementoVideo
var barraProgresso;
var duracaoTotal;
var update;

function Iniciar(){
    elementoVideo = document.querySelector('#video');
    barraProgresso = document.querySelector('#barra-progresso');
    duracaoTotal = elementoVideo.duration;

    alert (duracaoTotal)
}