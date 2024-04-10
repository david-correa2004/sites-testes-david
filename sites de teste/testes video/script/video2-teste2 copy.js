/* Eventos do video :
    https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/progress_event

*/

const video = document.querySelector('#video')
const progressBar = document.querySelector('#barra-progresso')



const currentTime = () => {
    let totalVideoDuration = Math.floor(video.duration)
    let halfVideoTime = (1 * totalVideoDuration) / 100 
    let currentTime = Math.floor(video.currentTime)
    let currentProgressBeforeHalf = (100 * currentTime / totalVideoDuration) * currentTime / 0.3 
    let currentProgressAfterHalf = (100 * currentTime / totalVideoDuration) / currentTime * 0.3 
    
    progressBar.style.width = `${currentTime >= halfVideoTime ? currentProgressAfterHalf : currentProgressBeforeHalf}%` 
    

    // if(progressBar.style.width === '20%'){

    // }


    video.addEventListener('timeupdate',currentTime)
}

video.addEventListener('timeupdate', currentTime)