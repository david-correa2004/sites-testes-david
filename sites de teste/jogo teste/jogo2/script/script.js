// script.js
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variáveis do jogo
let x = 50;
let y = 350;
let dx = 4;
let dy = -4;
let gravity = .5;
let isJumping = false;

// Função principal de desenho
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenhar o personagem
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 50, 50);

  // Atualizar a posição do personagem
  y += dy;
  dy += gravity;

  // Verificar se o personagem está no chão
  if (y + 50 > canvas.height) {
    y = canvas.height - 50;
    dy = 0;
    isJumping = false;
  }

  requestAnimationFrame(draw);
}

// Evento de clique para pular
document.addEventListener("click", function() {
  if (!isJumping) {
    dy = -15;
    isJumping = true;
  }
});

draw();
