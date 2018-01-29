const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  reverseTimer: document.querySelector('.reverse-timer.button'),
  stopwatch: document.querySelector('.stopwatch.button'),
  fix: document.querySelector('.fix.button')
};

timer.textContent = '00:00';

let isStopwatchStarted = false,
    isReverseTimerStarted = false,
    isStopwatchUsed = true;
    isReverseTimerUsed = false;
    currentSeconds = 0,
    currentMinutes = 0,
    oneSecondInterval = 0,
    audio = new Audio('reverse-timer-end.mp3');

function showSeconds() {
  return (currentSeconds < 10) ? "0" + currentSeconds : currentSeconds;
}

function showMinutes() {
  return (currentMinutes < 10) ? "0" + currentMinutes : currentMinutes;
}

function changeSeconds() {
  if (isStopwatchUsed) {
    if (currentSeconds == 59) {
      ++currentMinutes;
      currentSeconds = 0;
    } else {
      ++currentSeconds;
    }
    timer.textContent = showMinutes() + ":" + showSeconds();
  } else if (isReverseTimerUsed) {
    if (currentSeconds == 0 && currentMinutes == 0) {
      stopTimer();
      audio.play();
    } else if (currentSeconds == 0) {
      --currentMinutes;
      currentSeconds = 59;
    } else {
      --currentSeconds;
    }
    timer.textContent = showMinutes() + ":" + showSeconds();
  }
}

function startTimer() {
  if (isStopwatchUsed) {
    if (!isStopwatchStarted) {
      oneSecondInterval = window.setInterval(changeSeconds, 1000);
      isStopwatchStarted = true;
    }
  } else if (isReverseTimerUsed) {
    if (!isReverseTimerStarted) {
      oneSecondInterval = window.setInterval(changeSeconds, 1000);
      isReverseTimerStarted = true;
    }
  }
}

function stopTimer() {
  if (isStopwatchUsed) {
    if (isStopwatchStarted) {
      window.clearInterval(oneSecondInterval);
      isStopwatchStarted = false;
    }
  } else if (isReverseTimerUsed) {
    if (isReverseTimerStarted) {
      window.clearInterval(oneSecondInterval);
      isReverseTimerStarted = false;
    }
  }
}

function resetTimer() {
  stopTimer();
  currentSeconds = currentMinutes = 0;
  timer.textContent = '00:00';
}

function addTenSeconds() {
  if (currentSeconds <= 49) {
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

function enableReverseTimer() {
  let isNumberTyped = false, timerSeconds;
  while (!isNumberTyped) {
    timerSeconds = Number(prompt("Switched to reverse timer mode.\nNumber of seconds:", ""));
    if (!isNaN(timerSeconds) && timerSeconds != "") {
      isNumberTyped = true;
      break;
    } else {
      alert("Enter a number!");
    }
  }
  resetTimer();
  currentSeconds = timerSeconds % 60;
  currentMinutes = Math.floor(timerSeconds / 60);
  timer.textContent = showMinutes() + ":" + showSeconds();
  isStopwatchUsed = false;
  isStopwatchStarted = false;
  isReverseTimerStarted = false;
  isReverseTimerUsed = true;
  document.querySelector('.result-list').className = 'result-list hidden';
  document.querySelector('.fix').className = 'fix button hidden';
  document.querySelector('.result-list').textContent = "";
}

function enableStopwatch() {
  alert("Switched to stopwatch mode.");
  resetTimer();
  isStopwatchUsed = true;
  isStopwatchStarted = false;
  isReverseTimerStarted = false;
  isReverseTimerUsed = false;
  document.querySelector('.result-list').className = 'result-list';
  document.querySelector('.fix').className = 'fix button';
  document.querySelector('.result-list').textContent = "";
}

function fixTime() {
  if (isStopwatchStarted) {
    document.querySelector('.result-list').textContent =
      document.querySelector('.result-list').textContent +
      timer.textContent + '\n';
  }
}

buttons.start.addEventListener("click", startTimer);
buttons.stop.addEventListener("click", stopTimer);
buttons.reset.addEventListener("click", resetTimer);
buttons.plus.addEventListener("click", addTenSeconds);
buttons.minus.addEventListener("click", subtractTenSeconds);
buttons.reverseTimer.addEventListener("click", enableReverseTimer);
buttons.stopwatch.addEventListener("click", enableStopwatch);
buttons.fix.addEventListener("click", fixTime);
