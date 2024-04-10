// relogio analogico

let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let sc = document.querySelector("#sc")

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#ampm");



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
    if (am >=12){
        resizeBy.innerHTML = `<p>PM</p>`
    }else{
        resizeBy.innerHTML = `<p>AM</p>`
    }

    
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