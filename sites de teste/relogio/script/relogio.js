// relogio analogico

let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let sc = document.querySelector("#sc")

let hr_p = document.querySelector("#hr_p")
let mn_p = document.querySelector("#mn_p")
let sc_p = document.querySelector("#sc_p")

let hr_ny = document.querySelector("#hr_ny")
let mn_ny = document.querySelector("#mn_ny")
let sc_ny = document.querySelector("#sc_ny")

let hours_p = document.getElementById("hours_p");
let minutes_p = document.getElementById("minutes_p");
let seconds_p = document.getElementById("seconds_p");

let hours_ny = document.getElementById("hours_ny");
let minutes_ny = document.getElementById("minutes_ny");
let seconds_ny = document.getElementById("seconds_ny");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let ampm_p = document.getElementById("ampm");
let ampm_ny = document.getElementById("ampm");
let ampm = document.getElementById("ampm");


setInterval(() => {

    let timeZone

    if(!timeZone){
        timeZone = 0
    }else{
        paris.onclick= ()=> {
            timeZone = 3
        }
    }

    let h_p = new Date().getHours() + timeZone + 5 ;
    let h_y = new Date().getHours() + timeZone - 1 ;
    let h_b = new Date().getHours() + timeZone;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds() ;
    
    
    let tiempo = h_p
    let time = h_y
    let tempo = h_b
    
    hp = tiempo * 30
    ny = time * 30
    hh = tempo * 30
    mm = m * 6
    ss = s * 6
    
    hr_p.style.transform = `rotateZ(${hp+(mm/12)}deg)`;
    mn_p.style.transform = `rotateZ(${mm}deg)`;
    sc_p.style.transform = `rotateZ(${ss}deg)`;

    hr_ny.style.transform = `rotateZ(${ny+(mm/12)}deg)`;
    mn_ny.style.transform = `rotateZ(${mm}deg)`;
    sc_ny.style.transform = `rotateZ(${ss}deg)`;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    // relogio digital

    let am = tiempo >= 12 ? "PM" : "AM";

    if (tiempo > 12){
        tiempo = tiempo - 12
    }
    

    tiempo= (tiempo < 10) ? "0" + tiempo : tiempo
    m= (m < 10) ? "0" + m : m
    s= (s < 10) ? "0" + s : s

 
    hours_p.innerHTML = tiempo;
    minutes_p.innerHTML = m;
    seconds_p.innerHTML = s;
    ampm_p.innerHTML = am;
    
    hours_ny.innerHTML = time;
    minutes_ny.innerHTML = m;
    seconds_ny.innerHTML = s;
    
    hours.innerHTML = tempo;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
})

