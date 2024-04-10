// relogio analogico

let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let sc = document.querySelector("#sc")

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let paris = document.querySelector('.prs')
let newYork = document.querySelector('.nyk')
let brasil = document.querySelector('.bra')





// fuso horario

setInterval(() => {

    let timeZone

    if(!timeZone){
        timeZone = 0
    }else{
        paris.onclick= ()=> {
            timeZone = 3
        }
    }

    

    let h = new Date().getHours() + timeZone ;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds() ;

    let time = h

    hh = time * 30
    mm = m * 6
    ss = s * 6
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // relogio digital

    let am = time >= 12 ? "PM" : "AM";

if (time > 12){
    time = time - 12
}


    time= (time < 10) ? "0" + time : time
    m= (m < 10) ? "0" + m : m
    s= (s < 10) ? "0" + s : s

 
hours.innerHTML = time;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;


})