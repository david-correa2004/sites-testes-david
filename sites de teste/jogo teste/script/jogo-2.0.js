document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');
    let isJumping = false;
    let isFalling = false;
    let bottomPosition = 0;
  
    function jump() {
      isJumping = true;
      let jumpInterval = setInterval(() => {
        bottomPosition += 20;
        character.style.bottom = bottomPosition + 'px';
        if (bottomPosition > 200) {
          clearInterval(jumpInterval);
          isJumping = false;
          fall();
        }
      }, 20);
    }
  
    function fall() {
      isFalling = true;
      let fallInterval = setInterval(() => {
        bottomPosition -= 10;
        character.style.bottom = bottomPosition + 'px';
        if (bottomPosition === 0) {
          clearInterval(fallInterval);
          isFalling = false;
        }
      }, 20);
    }
  
    function control(e) {
      if (e.keyCode === 32 && !isJumping && !isFalling) {
        jump();
      }
    }
  
    document.addEventListener('keyup', control);
  });
  