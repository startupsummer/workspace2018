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
switch (currentMode) {
  case 'clockwise':
    timer.textContent = '00:00';
    break;
  case 'counter-clockwise':
    timer.textContent = '59:59';
    break;
  default:
    currentMode = 'counter-clockwise';
    timer.textContent = '59:59';
    break;
}

let startValue = prompt('Input start value in format: **:**', timer.textContent);

const timerArray = startValue.split(":");
let [timerMinutes, timerSeconds] = [Number(timerArray[0]), Number(timerArray[1])];

//set inputted value only if it's format is correct, otherwise set default value
if (/[0-9][0-9]:[0-9][0-9]/.test(createTimeString())) {
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
    console.log(`${'Ускорение: x'}${intervalsArray.length}`);
  } else if (intervalsArray.length === 1) {
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
  } else if (intervalsArray.length === 1) {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'none';
  } else {
    buttons.start.textContent = 'Ускорить';
    buttons.slowDown.style.display = 'block';
    console.log(`${'Ускорение: x'}${intervalsArray.length}`);
  }
}

function onStop() {
  while (intervalsArray.length) {
    clearInterval(intervalsArray.pop());
  }
  buttons.start.textContent = 'Старт';
  buttons.slowDown.style.display = 'none';
}

function onReset() {
  switch (currentMode) {
    case 'clockwise':
      timerMinutes = 0;
      timerSeconds = 0;
      break;
    case 'counter-clockwise':
      timerMinutes = 59;
      timerSeconds = 59;
      break;
    default:
      break;
  }
  displayChanges();
}

function onPlus(value) {
  changeTimerValue('+', 10);
  displayChanges();
}

function onMinus(value) {
  changeTimerValue('-', 10);
  displayChanges();
}

let fixedIndex = 0;

function onFixTable() {
  table.style.display = 'flex';
  buttons.clearTable.style.display = 'block';
  table.innerHTML = `${table.innerHTML}<div>${fixedIndex++}${' -- '}${createTimeString()}</div>`;
}

function onClearTable() {
  table.style.display = 'none';
  buttons.clearTable.style.display = 'none';
  table.innerHTML = '';
  fixedIndex = 0;
}

function handleStart() {
  try {
    switch (currentMode) {
      case 'clockwise':
        increaseTimerValueBy();
        break;
      case 'counter-clockwise':
        decreaseTimerValueBy();
        break;
      default:
        throw String('Wrong mode. Only "clockwise" and "counter-clockwise" are allowed.');
    }
    displayChanges();
  } catch (modeError) {
    console.error(modeError);
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

// it works for seconds <= 60
function changeTimerValue(operator = '+', seconds = 1) {
  try {
    switch (operator) {
      case '+':
        increaseTimerValueBy(seconds)
        break;
      case '-':
        decreaseTimerValueBy(seconds);
        break;
      default:
        throw String('Bad operation. Only "+" and "-" are allowed.');
    }
  } catch (operationError) {
    console.error(operationError);
  }
}

function increaseTimerValueBy(seconds = 1) {
  if (timerMinutes <= 59 && timerSeconds < (60 - seconds)) {
    timerSeconds += seconds;
  } else if (timerMinutes < 59 && timerSeconds >= (60 - seconds)) {
      timerMinutes += 1;
      timerSeconds -= (60 - seconds);
  } else if (timerMinutes === 59 && timerSeconds >= (60 - seconds)) {
    timerSeconds = 59;
    if (currentMode === 'clockwise') {
      onStop();
    }
  }
}

function decreaseTimerValueBy(seconds = 1) {
  if (timerMinutes > 0 && timerSeconds < seconds) {
    timerMinutes -= 1;
    timerSeconds += (60 - seconds);
  } else if (timerMinutes >= 0 && timerSeconds >= seconds) {
    timerSeconds -= seconds;
  } else if (timerMinutes === 0 && timerSeconds < seconds) {
    timerSeconds = 0;
    if (currentMode === 'counter-clockwise') {
      onStop();
    }
  }
}
