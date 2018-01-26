const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  reset: document.querySelector('.reset.button')
};

timer.textContent = '00:00';
let time = 0,
    timeoutID,
    flag = true;

function showTime() {
  let hours = Math.floor(time/60),
      minutes = time % 60,
      hoursString,
      minutesString;

  if (hours < 10) hoursString = "0" + hours;
  else hoursString = "" + hours;
  if (minutes < 10) minutesString = "0" + minutes;
  else minutesString = "" + minutes;

  timer.textContent = hoursString + ":" + minutesString;
}
buttons.start.onclick = function() {
  if (flag) {
    flag = false;
    timeoutID = setTimeout(function tick() {
      time++;
      showTime();
      timeoutID = setTimeout(tick, 1000);
    }, 1000);
  }
}
buttons.stop.onclick = function() {
  clearTimeout(timeoutID);
  flag = true;
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
  flag = true;
}
