/*  */
document.addEventListener('DOMContentLoaded', function () {
  // Defina a data alvo (1 hora a partir do momento atual)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);

  // Atualiza o contador a cada segundo
  const countdownInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference <= 0) {
          // O tempo acabou, faça algo aqui
          clearInterval(countdownInterval);
          document.querySelector('#hours').textContent = '00';
          document.querySelector('#minutes').textContent = '00';
          document.querySelector('#seconds').textContent = '00';
      } else {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          document.querySelector('#hours').textContent = padZero(hours);
          document.querySelector('#minutes').textContent = padZero(minutes);
          document.querySelector('#seconds').textContent = padZero(seconds);
      }
  }

  function padZero(number) {
      return number < 10 ? '0' + number : number;
  }
});


const targetDate = new Date('2024-01-01T00:00:00').getTime();

const daysEl = document.querySelector('#days2');
const hoursEl = document.querySelector('#hours2');
const minutesEl = document.querySelector('#minutes2');
const secondsEl = document.querySelector('#seconds2');

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  daysEl.textContent = days + '';
  hoursEl.textContent = hours + '';
  minutesEl.textContent = minutes + '';
  secondsEl.textContent = seconds + '';

  if (difference < 0) {
    clearInterval(interval);
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
  }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();






// // Função para iniciar o contador regressivo
// function startCountdown(duration, display) {
//   let timer = duration, hours, minutes, seconds;
//   setInterval(function () {
//     hours = parseInt(timer / 3600, 10);
//     minutes = parseInt((timer % 3600) / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.querySelector('#hours').textContent = hours;
//     display.querySelector('#minutes').textContent = minutes;
//     display.querySelector('#seconds').textContent = seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// // Iniciar o contador quando a página carregar
// window.onload = function () {
//   const oneHour = 60 * 60;
//   const display = document.querySelector('#timer');
//   startCountdown(oneHour, display);
// };





























// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;

//     setInterval(function() {
//         horas = parseInt(timer / 60, 10);
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         dias = dias < 10 ? '0' + dias : dias;
//         horas = horas < 10 ? '0' + horas : horas;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         seconds = seconds < 10 ? '0' + seconds : seconds;

//         display.textContent = horas + ':' + minutes + ':' + seconds;

//         if(--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function() {
//     var duration = 60 * 5 /* conveersão para degundos */
//     var display = document.querySelector('#timer')

//     startTimer(duration,display);
// }