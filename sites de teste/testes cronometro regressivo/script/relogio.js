let hours = document.querySelector("#hours");
let minutes = document.querySelector("#min");
let data = document.querySelector("#dias");
let mes = document.querySelector("#mes");



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

    

    let h = new Date().getHours() - timeZone ;
    let m = new Date().getMinutes();
    let d = new Date().getDate();


    let time = h

    hh = time * 30
    mm = m * 6
    
    // relogio digital
    if (time > 12){
        time = time - 12
    }

    time= (time < 10) ? "0" + time : time
    m= (m < 10) ? "0" + m : m

 
hours.innerHTML = time;
minutes.innerHTML = m;
data.innerHTML = d;


})