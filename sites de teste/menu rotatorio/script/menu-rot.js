let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let fechar = document.querySelector(".link")

toggle.onclick = function(){
  menu.classList.toggle("active");
}

closeBtn.onclick = () => {
  menu.dataset.active = "false";
}
