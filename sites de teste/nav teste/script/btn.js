const btn = document.querySelector('.btn-flut')
const btn2 = document.querySelector('.btn-flut2')

window.onscroll = () => {
    
    if(window.scrollY > 0){
        btn.style.transform = 'rotateZ(180deg)'
        btn.href="#"
    }else{
        btn.style.transform = 'rotateZ(0deg)'
        btn.href="#form"
    }
}