
const cursor = document.querySelector('.cursor')
const img = document.querySelector('img')
const img2 = document.querySelector('.img')
const btn = document.querySelector('.btn')
const text = document.querySelector('p')

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    
    
});

btn.addEventListener('mousemove', () => {
    img.style.transform= "scale(80%)";
    cursor.style.display = "none";
})

btn.onclick = () => {
    img.style.transform= "rotateZ(200deg)";
    img.style.transition='1s'
    img.style.opacity= '0'
    text.style.transition='5s'
    text.style.opacity='1'
    
    setTimeout(() =>{
        img.style.opacity= '1'
        text.style.transform= "rotateZ(-200deg)";
        text.style.opacity='0'
    }, 10000)
}

document.addEventListener('mouseout', () => {
    
    img.style.transform= "scale(100%)";
    cursor.style.display = "none";
})