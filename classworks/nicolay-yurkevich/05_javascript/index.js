const timer = document.querySelector('.timer');

const buttons = {
    start: document.querySelector('.start.button'),
    stop: document.querySelector('.stop.button'),
    reset: document.querySelector('.reset.button'),
    plus: document.querySelector('.plus.button'),
    minus: document.querySelector('.minus.button'),
};
timer.state = false;
timer.textContent = '00:00';
let intervalIdMin;
let intervalIdSec;
let restTimeMicSec;
let restTimeMinId;
let restTimeSecId;
timer.minutes = 0;
timer.seconds = 0;

buttons.start.addEventListener('click', startHandler);
buttons.stop.addEventListener('click', stopHandler);
buttons.reset.addEventListener('click', resetHandler);
buttons.plus.addEventListener('click', plusTenSec);
buttons.minus.addEventListener('click', minusTenSec);


function toggleState() {
    timer.state = (timer.state) ? false : true;
}

function startHandler() {
    if (timer.state) { return;}
    toggleState();
    restTimeMicSec = 60000 - timer.seconds;
    restTimeMinId = setTimeout(() => {
        minute();
        intervalIdMin = setInterval(minute, 60000);
    }, restTimeMicSec - 1000);
    restTimeSecId = setTimeout(() => {
        second();
        intervalIdSec = setInterval(second, 1000);
    }, restTimeMicSec % 100);

};

function toggleAndClear() {
    toggleState();
    clearTimeOuts();
}

function clearTimeOuts() {
    clearTimeout(restTimeMinId);
    clearTimeout(restTimeSecId);
    clearInterval(intervalIdMin);
    clearInterval(intervalIdSec);
}

function stopHandler() {
    if (!timer.state) { return;}
    toggleAndClear();
};

function minute() {
    if (timer.minutes === 99) {
        alert('Your time is up!');
        resetHandler();
        return;
    }
    timer.minutes++;
    if ((timer.minutes / 10) < 1) {
        timer.textContent = `0${timer.minutes}` + timer.textContent.slice(2, 5);
    } else {
        timer.textContent = `${timer.minutes}` + timer.textContent.slice(2, 5);
    }
}

function second() {
    if (timer.seconds === 59000) {
        timer.textContent = timer.textContent.slice(0, 2) + ':00';
        timer.seconds = 0;
        return;
    }
    timer.seconds += 1000;
    if ((timer.seconds / 10000) < 1) {
        timer.textContent = timer.textContent.slice(0, 2) + `:0${timer.seconds/1000}`;
    } else {
        timer.textContent = timer.textContent.slice(0, 2) + `:${timer.seconds/1000}`;
    }
}
function setZero(){
    timer.seconds = 0;
    timer.minutes = 0;
    timer.textContent = '00:00';
}
function resetHandler() {
    setZero();
    toggleAndClear();
}

function plusTenSec() {

        timer.seconds += 9000;

        if (timer.seconds >= 60000) {
            timer.seconds -= 60000
            timer.minutes++;
            if ((timer.minutes / 10) < 1) {
                timer.textContent = `0${timer.minutes}` + timer.textContent.slice(2, 5);
            } else {
                timer.textContent = `${timer.minutes}` + timer.textContent.slice(2, 5);
            }

           if (timer.state){stopHandler(); startHandler();}else{second(); if(timer.seconds%59000===0){minute();}}
        } else {
            if (timer.state){stopHandler(); startHandler();}else{if(timer.seconds%59000===0){minute();} second(); }
        }
}

function minusTenSec() {

    timer.seconds -= 11000;

    if (timer.seconds < 0) {
        if (timer.seconds < 0 && timer.minutes === 0) {
            setZero();
            return;
        }
        timer.seconds += 60000;
        timer.minutes--;
        if ((timer.minutes / 10) < 1) {
            timer.textContent = `0${timer.minutes}` + timer.textContent.slice(2, 5);
        } else {
            timer.textContent = `${timer.minutes}` + timer.textContent.slice(2, 5);
        }

        if (timer.state){stopHandler(); startHandler();}else{second();  if(timer.seconds%59000===0) {  minute();}}
    } else {
        if (timer.state){stopHandler(); startHandler();}else{second(); if(timer.seconds%59000===0){minute();}}
    }

}