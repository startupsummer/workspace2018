const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  reverseTimer: document.querySelector('.reverse-timer.button'),
};

timer.textContent = '00:00';

let isTimerStarted = false,
    isReverseTimerStarted = false,
    currentSeconds = 0,
    currentMinutes = 0,
    intervalSec;

function showSeconds() {
  return (currentSeconds < 10) ? "0" + currentSeconds : currentSeconds;
}

function showMinutes() {
  return (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;
}

function addSecond() {
  if (currentSeconds == 59) {
    ++currentMinutes;
    currentSeconds = 0;
  } else {
    ++currentSeconds;
  }
  timer.textContent = showMinutes() + ":" + showSeconds();
}

function startTimer() {
  if (!isTimerStarted) {
    intervalSec = window.setInterval(addSecond, 1000);
    isTimerStarted = true;
  }
}

function stopTimer() {
  if (isTimerStarted) {
    window.clearInterval(intervalSec);
    isTimerStarted = false;
  }
}

function resetTimer() {
  if (isTimerStarted) {
    window.clearInterval(intervalSec);
    isTimerStarted = false;
  }
  currentSeconds = currentMinutes = 0;
  timer.textContent = '00:00';
}

function addTenSeconds() {
  if (currentSeconds < 49) {
    currentSeconds += 10;
  } else if (currentSeconds == 50) {
    currentSeconds = 0;
    ++currentMinutes;
  } else {
    currentSeconds -= 50;
    ++currentMinutes;
  }
  timer.textContent = showMinutes() + ":" + showSeconds();
}

function subtractTenSeconds() {
  if (currentSeconds <= 10 && currentMinutes == 0) {
    currentSeconds = 0;
  } else if (currentSeconds <= 10) {
    currentSeconds += 50;
    --currentMinutes;
  } else {
    currentSeconds -= 10;
  }
  timer.textContent = showMinutes() + ":" + showSeconds();
}

function startReverseTimer() {
  let timerSeconds = prompt("Number of seconds:", "");
  currentSeconds = timerSeconds % 60;
  currentMinutes = timerSeconds / 60;
}

buttons.start.addEventListener("click", startTimer);
buttons.stop.addEventListener("click", stopTimer);
buttons.reset.addEventListener("click", resetTimer);
buttons.plus.addEventListener("click", addTenSeconds);
buttons.minus.addEventListener("click", subtractTenSeconds);
//buttons.reverseTimer.addEventListener("click", startReverseTimer);
