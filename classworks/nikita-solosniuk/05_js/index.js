const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
};

let start = null;
function startTimer () {
    if (start === null)
        start = setInterval(incTimer, 1000);
}

function timeToNum (time) {
    return (time.slice(0, time.indexOf(':'))*60+Number(time.slice(-2)));
}

function numToTime (num) {
    let minutes = ~~(num/60);
    let seconds = num % 60;
    if (minutes < 10) {
        if (minutes > 0)
            minutes = '0' + minutes;
        else minutes = '00';
    }
    else
        minutes = '' + minutes;
    if (seconds < 10) {
        if (seconds > 0)
            seconds = '0' + seconds;
        else seconds = '00';
    }
    else
        seconds = '' + seconds;
    return (minutes + ':' + seconds);
}

function incTimer (num) {
    if (num == undefined) num = 1;
    timer.textContent = numToTime(timeToNum(timer.textContent) + num);
}

function setZero () {
    timer.textContent = '00:00';
}

function stopTimer () {
    clearInterval(start);
    start = null;
}

function resetTimer () {
    setZero();
    stopTimer();
}

buttons.start.addEventListener('click', startTimer);
buttons.stop.addEventListener('click', stopTimer);
buttons.reset.addEventListener('click', resetTimer);
buttons.plus.addEventListener('click', function(){incTimer(10)});
buttons.minus.addEventListener('click', function(){incTimer(-10)});

setZero();
