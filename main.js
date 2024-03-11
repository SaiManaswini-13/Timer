const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');

var interval = null;
var total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minutes.value)*60 + Number(seconds.value);
}

Timer = ()=>{
    totalValue();
    total--;

    if(total >= 0){
        var hr = Math.floor(total/3600);
        var min = Math.floor((total/60) - (hr*60));
        var sec = total - (hr*3600) - (min*60);

        hour.value = hr;
        minutes.value = min ;
        seconds.value = sec ;
    }
    else{
        disp.innerText = "Time Over !!!"
    }
}

start.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(Timer,1000);

    disp.innerText = "Timer Started..";
});

reset.addEventListener('click',()=>{
    clearInterval(interval);
    hour.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    disp.innerText = "Timer";
})