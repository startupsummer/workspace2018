const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  reset: document.querySelector('.reset.button'),
  reverse: document.querySelector('.reverse.button'),
  write: document.querySelector('.write.button')
};

timer.textContent = '00:00';
let time = 0,
    timeoutID,
    flagStart = true,
    flagReverce = true,
    countStopwatch = 0,
    coutnTimer = 0;
let results = document.querySelector('.results');

function parseTime() {
  let hours = Math.floor(time/60),
      minutes = time % 60,
      stringTime = {};

  if (hours < 10) stringTime.hours = "0" + hours;
  else stringTime.hours = "" + hours;
  if (minutes < 10) stringTime.minutes = "0" + minutes;
  else stringTime.minutes = "" + minutes;
  return stringTime.hours + ":" + stringTime.minutes;
}
function showTime() {
  timer.textContent = parseTime();
}
buttons.start.onclick = function() {
  if (flagStart) {
    flagStart = false;
    flagReverce = true;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function tick() {
      time++;
      showTime();
      timeoutID = setTimeout(tick, 1000);
    }, 1000);
  }
}
buttons.stop.onclick = function() {
  clearTimeout(timeoutID);
  flagStart = true;
  flagReverce = true;
}
buttons.plus.onclick = function() {
  time += 10;
  showTime();
}
buttons.minus.onclick = function() {
  time -= 10;
  if (time < 0) time = 0;
  showTime();
}
buttons.reset.onclick = function() {
  clearTimeout(timeoutID);
  time = 0;
  showTime();
  flagStart = true;
  flagReverce = true;
}
buttons.reverse.onclick = function() {
  if (flagReverce) {
    flagReverce = false;
    flagStart = true;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(function tick() {
      time--;
      if (time < 0) {
        time = 0;
        clearTimeout(timeoutID);
        flagReverce = true;
        return;
      }
      showTime();
      timeoutID = setTimeout(tick, 1000);
    }, 1000);
  }
}
buttons.write.onclick = function() {
  let node = document.createElement('li');
  if (!flagStart) {
    countStopwatch++;
    node.textContent = "Секундомер - " + countStopwatch + " :  " + parseTime();
    document.querySelector('.results').style.visibility = "visible";
  }
  else if (!flagReverce) {
    coutnTimer++;
    node.textContent = "Таймер - " + coutnTimer + " :  " + parseTime();
    document.querySelector('.results').style.visibility = "visible";
  }
  else {
    node.textContent = "Время    :  " + parseTime();
    document.querySelector('.results').style.visibility = "visible";
  };
  results.appendChild(node);
}
