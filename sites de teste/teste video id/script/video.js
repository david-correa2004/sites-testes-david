
  // Substitua o ID do vídeo (depois de "videoId:") pelo ID do vídeo do YouTube que você deseja incorporar
  // Substitua o valor de "player" pelo ID que você deseja para o player
  // Mais parâmetros e opções podem ser encontrados na documentação da API do YouTube
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Função para criar o player após a API ser carregada
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      height: '315',
      width: '560',
      videoId: 'LZLBgv-ZApE', // Substitua este ID pelo ID do vídeo do YouTube desejado
      breakpoints: {
          800: {
              height: '158',
              width: '280',
          }
      },
      playerVars: {
        'autoplay': 1,
        'controls': 1,
        'rel': 0,
        'showinfo': 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  function onPlayerReady(event) {
    event.target.playVideo(); // Inicia o vídeo automaticamente quando estiver pronto
  }
  function onPlayerStateChange(event) {
    // Você pode adicionar lógica para lidar com mudanças de estado do player, se desejar
  }