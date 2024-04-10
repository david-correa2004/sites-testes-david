/* Eventos do video :
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event

*/

const btn1 = document.querySelector('#btn1')
const cont_after = document.querySelector('.cont-after')
const video_fundo = document.querySelector('#video-fundo')
const video = document.querySelector('#video')
const mutedd = document.querySelector('#mutedd')
const img = document.querySelector('#img')
const h3 = document.querySelector('#h3')
const p = document.querySelector('#p')
const progressBar = document.querySelector('#barra-progresso')



const currentTime = () => {
    let totalVideoDuration = Math.floor(video.duration)
    let halfVideoTime = (50 * totalVideoDuration) / 100 
    let currentTime = Math.floor(video.currentTime)
    let currentProgressBeforeHalf = ((100 * currentTime) / totalVideoDuration) / 0.115
    let currentProgressAfterHalf = ((100 * currentTime) / totalVideoDuration) * 0.115
    
    progressBar.style.width = `${currentTime >= halfVideoTime ? currentProgressAfterHalf : currentProgressBeforeHalf}%` 

    video.addEventListener('timeupdate',currentTime)
}

video.addEventListener('timeupdate', currentTime)
// const progress = document.querySelector('#barra')







// const muted = () => {
//     // video.muted = false;
//     video.autoplay = (true);
//     video.style.display = 'block';
//     video_fundo.style.display = 'none';
//     mutedd.style.display = 'none';
//     img.style.width = '0px';
//     h3.style.display = 'none';
//     p.style.display = 'none';
//     cont_after.style.display = 'none';
//     if (video.paused)
//         video.play();
//     else
//         video.pause();
// }
// video.onclick = () => {
//     mutedd.style.display = 'flex';
//     mutedd.style.borderRadius = '500px';
//     mutedd.style.width = '17%';
//     mutedd.style.height = '30%';
//     img.style.width = '100%';
//     img.style.left = '2px';
//     img.src = "./assets/icon/play.svg";
//     cont_after.style.display = 'block';
//     if (video.paused)
//         video.play();
//     else
//         video.pause();
//     mutedd.removeEventListener("click", muted)
//     mutedd.addEventListener("click", play)
// }
// const play = () => {
//     mutedd.style.display = 'none';
//     img.style.width = '0px';
//     img.classList.remove('muted');
//     cont_after.style.display = 'none';
//     if (video.paused)
//         video.play();
//     else
//         video.pause();
// }
// mutedd.addEventListener("click", muted)