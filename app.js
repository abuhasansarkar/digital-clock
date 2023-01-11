

function digitalClock(){

    const date = new Date();
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormet = "AM";

    if(hours == 0){
        hours = 12;
    }if(hours > 12){
        hours = hours -12;
        timeFormet = "PM";
    }
    
 hours = hours < 10 ? '0'+ hours: hours;
 minites = minites < 10 ? '0'+ minites: minites;
 seconds = seconds < 10 ? '0'+ seconds: seconds;

    const finalTime = `${hours}:${minites}:${seconds} `;
    document.getElementById("time").innerText = finalTime;
    document.querySelector("span").innerText = timeFormet;
}

setInterval(digitalClock, 1000);