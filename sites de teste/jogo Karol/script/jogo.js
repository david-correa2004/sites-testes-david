// let container = document.querySelector('.container')
let jog = document.querySelector(".jogador")
let jogr = document.querySelector(".jogadorr")
let pedra = document.querySelector(".pedra")
let jogo = document.querySelector(".container")
let nuvem = document.querySelector("#nuvem")
let nuvem2 = document.querySelector("#nuvem2")
let nuvem3 = document.querySelector("#nuvem3")
let passaro = document.querySelector(".passaro")
let passaro2 = document.querySelector(".passaro2")
let passaro3 = document.querySelector(".passaro3")

//fazer a esfera pular com o click do mouse
const clicar = () => {
    jog.style.display = 'none'
    jogr.style.display = 'block'
    jogr.classList.add('jump')
    
    setTimeout(() =>{
        jogr.style.display = 'none'
        jog.style.display= 'block'
        jog.classList.remove('jump')
    }, 500)
}

//fazer a esfera pular em apertar qualquer tecla
const jump = () => {
    jog.style.display = 'none'
    jogr.style.display = 'block'
    jogr.classList.add('jump')
    
    setTimeout(() =>{
        jogr.style.display = 'none'
        jog.style.display= 'block'
        jog.classList.remove('jump')
    }, 500)
}




//mudar para dia e noite após 10 minutos
let colors = ["linear-gradient(180deg, #0a0af0, #2571fffc)", " linear-gradient(180deg, #040440, #072c70fc)"];
let i = 0;
setInterval(function(){
  jogo.style.background = colors[i];
  i = (i == (colors.length -1)) ? 0 : i+1;
},900000);

//almentar a velocidade da pedra depois de 5 minutos
setInterval(function(){
  pedra.style.animation = 'pedra 1.5s infinite linear';
},300000);


//loop do jogo
const loop = setInterval(() => {
    
    const pedraPosition = pedra.offsetLeft
    const jogPosition = +window.getComputedStyle(jog).bottom.replace('px', '')
    const jogrPosition = +window.getComputedStyle(jogr).bottom.replace('px', '')

    //nuvem
    const cloudPosition = +window.getComputedStyle(nuvem).right.replace('px', '')
    const cloud2Position = +window.getComputedStyle(nuvem2).right.replace('px', '')
    const cloud3Position = +window.getComputedStyle(nuvem3).right.replace('px', '')

    //passaros
    const passaroPosition = +window.getComputedStyle(passaro).right.replace('px', '')
    const passaro2Position = +window.getComputedStyle(passaro2).right.replace('px', '')
    const passaro3Position = +window.getComputedStyle(passaro3).right.replace('px', '')

    //perde o jogo quando acontecer isso
    if(pedraPosition <= 70 && pedraPosition > 0 && jogPosition < 46 && jogrPosition < 46) {
        

        //onde a pedra vai ficar se a esfera relar nela
        pedra.style.animation = 'none'
        pedra.style.left = `${pedraPosition}px`

        //o que acontece quando a esfera encosta na pedra
        jog.style.animation = 'roda 0s'
        jog.style.animation = 'game-over 1s '
        jog.style.bottom = `${jogPosition}px`
        jogr.style.bottom = `${jogrPosition}px`
        jog.style.opacity = '0'
        
        //o que acontece com o ceu quando perde o jogo
        jogo.style.background = '#000'
        
        //o que acontece com os passaros quando perde o jogo
        passaro.style.animation = 'none'
        passaro.style.right = `${passaroPosition}px`
        passaro2.style.animation = 'none'
        passaro2.style.right = `${passaro2Position}px`
        passaro3.style.animation = 'none'
        passaro3.style.right = `${passaro3Position}px`
        
        //o que acontece com as nuvens quando perde o jogo
        nuvem.style.animation = 'none'
        nuvem.style.right = `${cloudPosition}px`
        nuvem2.style.animation = 'none'
        nuvem2.style.right = `${cloud2Position}px`
        nuvem3.style.animation = 'none'
        nuvem3.style.right = `${cloud3Position}px`


        const jump = () => {
            jog.style.display = 'none'
            jogr.style.display = 'none'
            jogr.classList.add('jump')
            
            setTimeout(() =>{
                jogr.style.display = 'none'
                jog.style.display= 'none'
                jog.classList.remove('jump')
            }, 500)
        }

        // window.alert('Você perdeu deseja reiniciar?')
        
        // const start = () => {
        //     jog.classList.add('jump')
        
        //     setTimeout(() =>{
        //         jog.reload(forcedReload)
        //     }, 500)
        // }
        // function clicar () {
        //     window.location.reload(true);
        // }
        
        // jogo.addEventListener("click", clicar)
        document.addEventListener('keydown', jump)
    }
    
})

//chamar o click e a tecla para fazer a esfera pular
document.addEventListener('keydown', jump)
jogo.addEventListener("click", clicar)
