document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    var progressBar = document.getElementById('progressBar');
  
    video.addEventListener('timeupdate', updateProgressBar);
  
    function updateProgressBar() {
      var progress = (video.currentTime / video.duration) * 100;
      progressBar.style.width = progress + '%';
    }
    
    function startFastAndDecelerate() {
      var duration = video.duration;
      var currentTime = video.currentTime;
      
      // Ajuste esses valores para controlar a velocidade inicial e a desaceleração
      var initialSpeed = 20;  // velocidade inicial
      var decelerationRate = 0.2;  // taxa de desaceleração
  
      if (currentTime < duration) {
        currentTime += initialSpeed;
        initialSpeed = Math.max(0, initialSpeed - decelerationRate);
        video.currentTime = currentTime;
        updateProgressBar();
        requestAnimationFrame(startFastAndDecelerate);
      }
    }
  
    video.addEventListener('loadedmetadata', function () {
      startFastAndDecelerate();
    });
  });
  


  /*Neste exemplo, a função startFastAndDecelerateé responsável por avançar rapidamente o vídeo inicialmente e depois desacelerá-lo ao longo do tempo. Você pode ajustar os valores de initialSpeede decelerationRatepara controlar a velocidade inicial e a taxa de desaceleração.*/