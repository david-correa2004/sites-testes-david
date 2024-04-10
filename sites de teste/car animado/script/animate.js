var a = document.querySelector("#car")
a.addEventListener("click", clicar)
a.addEventListener("mousemove", move)
a.addEventListener("mouseout", sair)

function clicar() {
    a.style.background = "#0f0f40"
    a.style.width = "200px"
    a.style.height = "300px"
    a.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod culpa iste deserunt id, animi quae ipsum nisi aperiam, consequatur error, magnam laborum optio necessitatibus tenetur fugiat doloribus! Ea, repellat magni."
    a.style.padding = "0"
    a.style.color = "#fff"
    a.style.padding = "0 5%"
}
function move() {
    a.style.transform = "rotate(180deg) translate(-50%, -50%)";
    a.style.background = "#ffffff67"
}
function sair() {
    a.style.transform = "translateX(0%)"
    a.style.background = "#00000067"
    a.style.width = "200px"
    a.style.height = "200px"
    a.style.padding = "0 5%"
    a.style.color = "#fff"
    a.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
}