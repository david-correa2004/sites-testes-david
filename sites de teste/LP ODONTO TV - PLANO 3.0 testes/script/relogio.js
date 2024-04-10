let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let ampm = document.querySelector("#ampm");
let data = document.querySelector("#data");
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

    

    let h = new Date().getHours() + timeZone ;
    let m = new Date().getMinutes();
    let d = new Date().getDate();
    let ms = new Date().getMonth() + 1;

    let mss
    
    switch (ms) {
        case 1:
          mss = 'jan';
          break;
    
        case 2:
          mss = 'fev';
          break;
    
        case 3:
          mss = 'mar';
          break;
    
        case 4:
          mss = 'abr';
          break;
    
        case 5:
          mss = 'mai';
          break;
    
        case 6:
          mss = 'jun';
          break;
    
        case 7:
          mss = 'jul';
          break;
    
        case 8:
          mss = 'ago';
          break;
    
        case 9:
          mss = 'set';
          break;
    
        case 10:
          mss = 'out';
          break;
    
        case 11:
          mss = 'nov';
          break;
    
        case 12:
          mss = 'dez';
          break;
      }
    

    let time = h

    hh = time * 30
    mm = m * 6
    
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

 
hours.innerHTML = time;
minutes.innerHTML = m;
ampm.innerHTML = am;
data.innerHTML = d;
mes.innerHTML = mss;


})