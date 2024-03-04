let time = 0;
let interval;
const start = document.querySelector(".start");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
var laparea = document.querySelector(".laparea");


function startTime(){
    start.innerHTML = 'Pause';
    if(interval)
    {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        time += 1;
        display.innerHTML=
        Math.floor(time / 3600).toString().padStart(2, "0") + ":" + Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":" + Math.floor((time % 60)).toString().padStart(2, "0");
    }, 1000);
}

// Stop Time

function StopTime() {
    start.innerHTML = "Start";
    clearInterval(interval);
    interval=null;
}

// Start and Stop Option Button

// start.onclick =  function () {
//     if (interval) {
//         StopTime();
//     } else {
//         startTime();
//     }
// }


function Handleclick() {
    if(interval)
    {
        StopTime();
    }
    else{
        startTime();
    }
}

function resetHandle () {
    start.innerHTML = "Start";
    if(interval)
    {
        clearInterval(interval)
    }
    interval = null;
    time = 0;
    display.innerHTML = "00 : 00 : 00";
    clearlaps();
}


function lapHandle() {
    // laparea.innerHTML = display.textContent;
    var lapTimeDiv = document.createElement('div');
    // Set the content of the new <div> to the current lap time
    lapTimeDiv.textContent = display.textContent;
    // Append the new <div> containing the lap time to the laparea element
    laparea.appendChild(lapTimeDiv);
    // Append a <br> tag to create a new line between lap times
    laparea.appendChild(document.createElement('br'));
    
}

function clearlaps()
{
    laparea.innerHTML = "";
}








