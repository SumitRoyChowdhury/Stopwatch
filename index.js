let btnState = document.getElementsByClassName("state")[0];
let resetBtn = document.getElementsByClassName("reset")[0];
let displayBox = document.getElementsByClassName("display-box")[0];
let totalSeconds = 0;
let sec = 0;
let min = 0;
let hour = 0;
let clockSec = "";
let clockMin = "";
let clockHour = "";
let isRunning = false;
let clockId = null;

function formatTime(sec, min, hour){
    if (sec < 10){
        clockSec = "0" + sec.toString();
    }
    else{
        clockSec = sec.toString();
    }
    if (min < 10){
        clockMin = "0" + min.toString();
    }
    else{
        clockMin = min.toString();
    }
    if (hour < 10){
        clockHour = "0" + hour.toString();
    }
    else{
        clockHour = hour.toString();
    }
    return `${clockHour}:${clockMin}:${clockSec}`;
}

function updateTime(){
    totalSeconds++;
    sec = totalSeconds%60;
    min = Math.floor(totalSeconds/60);
    hour = Math.floor(totalSeconds/3600);
    displayBox.innerText = formatTime(sec, min, hour);
}

btnState.addEventListener("click", clockFunction);
resetBtn.addEventListener("click", reset);

function clockFunction(){
    if (isRunning){
        isRunning = false;
        btnState.innerText = "Start";
        clearInterval(clockId);
    }
    else{
        isRunning = true;
        clockId = setInterval(updateTime, 1000);
        btnState.innerText = "Stop";
    }
}

function reset(){
    totalSeconds = 0;
    displayBox.innerText = "00:00:00";
    clearInterval(clockId);
    isRunning = false;
    btnState.innerText = "Start";
}
