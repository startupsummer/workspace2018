// import { setInterval } from "timers";

const timer = document.querySelector('.timer');

const table = document.querySelector('.table');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  slowDown: document.querySelector('.slowdown.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  fixTable: document.querySelector('.fix-table.button'),
  clearTable: document.querySelector('.clear-table.button'),
};

const events = {
  startEvent: buttons.start.addEventListener('click', onStart),
  stopEvent: buttons.stop.addEventListener('click', onStop),
  slowDownEvent: buttons.slowDown.addEventListener('click', onSlowDown),
  resetEvent: buttons.reset.addEventListener('click', onReset),
  plusEvent: buttons.plus.addEventListener('click', onPlus),
  minusEvent: buttons.minus.addEventListener('click', onMinus),
  fixTableEvent: buttons.fixTable.addEventListener('click', onFixTable),
  clearTableEvent: buttons.clearTable.addEventListener('click', onClearTable),
}

let currentMode = prompt('Input "clockwise" or "counter-clockwise" mode.', 'counter-clockwise');
switch(currentMode) {
  case 'clockwise': 
    timer.textContent = '00:00';
    break;
  case 'counter-clockwise': 
    timer.textContent = '59:59';
    break;
}

let startValue = prompt('Input start value in format: **:**', timer.textContent);

const timerArray = startValue.split(":");
let [timerMinutes, timerSeconds] = [Number(timerArray[0]), Number(timerArray[1])];

//set inputted value only if it's format is correct, otherwise set default value
if(/[0-9][0-9]:[0-9][0-9]/.test(createTimeString())) {
  if (timerMinutes > 59) {
    timerMinutes = 59;
  }
  if (timerSeconds > 59) {
    timerSeconds = 59;
  }
  if (timerMinutes < 0) {
    timerMinutes = 0;
  }
  if (timerSeconds < 0) {
    timerSeconds = 0;
  }
  timer.textContent = createTimeString();
}

const intervalsArray = [];

function onStart() {
  const interval = setInterval(handleStart, 1000);
  intervalsArray.push(interval);
  if (intervalsArray.length > 1) {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'block';
  } else if(intervalsArray.length === 1) {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'none';
  } else {
    buttons.start.textContent = 'Старт';
  }
}

function onSlowDown() {
  clearInterval(intervalsArray.pop());
  if (!intervalsArray.length) {
    buttons.start.textContent = 'Старт';
  }
  if (intervalsArray.length < 1) {
    buttons.start.textContent = 'Старт';
  } else if(intervalsArray.length === 1) {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'none';
  } else {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'block';
  }
}

function onStop() {
  while(intervalsArray.length) {
    clearInterval(intervalsArray.pop());
  }
  buttons.start.textContent = 'Старт';
  buttons.slowDown.style.display = 'none';
}

function onReset() {
  switch(currentMode) {
    case 'clockwise':
      timerMinutes = 0;
      timerSeconds = 0;
      break;
    case 'counter-clockwise':
      timerMinutes = 59;
      timerSeconds = 59;
      break;
  }
  displayChanges();
}

function onPlus(value) {
  manuallyChangeValue('plus', 10);
  displayChanges();
}

function onMinus(value) {
  manuallyChangeValue('minus', 10);
  displayChanges();
}

let fixedIndex = 0;
function onFixTable() {
  table.style.display = 'flex';
  buttons.clearTable.style.display = 'block';
  table.innerHTML += `<div>${fixedIndex++}${' -- '}${createTimeString()}</div>`;
}

function onClearTable() {
  table.style.display = 'none';
  buttons.clearTable.style.display = 'none';
  table.innerHTML = '';
  fixedIndex = 0;
}

function handleStart() {
  startTimer();
  displayChanges();
}

function startTimer() {
  switch (currentMode) {
    case 'clockwise': 
      if (timerMinutes < 59 && timerSeconds >= 59) {
        timerSeconds = 0;
        timerMinutes += 1;
      } else if(timerMinutes < 59 && timerSeconds < 59) {
        timerSeconds += 1;
      } else if (timerMinutes === 59 && timerSeconds < 59) {
        timerSeconds += 1;
      } else if (timerMinutes === 59 && timerSeconds === 59) {
        onStop();
      }
      break;
    case 'counter-clockwise': 
      if (timerMinutes > 0 && timerSeconds === 0) {
        timerMinutes -= 1;
        timerSeconds = 59;
      } else if(timerMinutes >= 0 && timerSeconds > 0) {
        timerSeconds -= 1;
      } else if (timerMinutes ===0 && timerSeconds === 0) {
        onStop();
      }
      break;
  }
}

function createTimeString() {
  let minutesTimeString = `${timerMinutes}`;
  let secondsTimeStraing = `${timerSeconds}`;
  if (isLessThanTen(timerMinutes)) {
    minutesTimeString = `${'0'}${timerMinutes}`;
  }
  if (isLessThanTen(timerSeconds)) {
    secondsTimeStraing = `${'0'}${timerSeconds}`;
  }
  return `${minutesTimeString}${':'}${secondsTimeStraing}`;
} 

function isLessThanTen(value) {
  return value < 10 ? true : false;
}

function displayChanges() {
  timer.innerHTML = createTimeString();
}

// it works for operand <= 60
function manuallyChangeValue (operator = 'plus', operand = 10) {
  switch(operator) {
    case 'plus': 
      if (timerSeconds < (60 - operand)) {
        timerSeconds += operand; 
      } else if(timerMinutes == 59) {
        if (operand >= (60 - timerSeconds)) {
          timerSeconds = 59;
        } else {
          timerSeconds += operand;
        }
      } else {
        if(timerMinutes < 59) {
          timerMinutes += 1;
          timerSeconds -= (60 - operand);
        }
      }
      break;
    case 'minus': 
      if (timerSeconds > 10) {
        timerSeconds -= operand; 
      } else {
        if (timerMinutes > 0) {
          timerMinutes -= 1;
          timerSeconds += (60 - operand);
        } else {
          timerSeconds = 0; 
        }
      }
      break;
  }
} 