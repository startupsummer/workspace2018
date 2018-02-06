const timer = document.querySelector('.timer');
const history = document.querySelector('.history');

const buttons = {
  start:   document.querySelector('.start.button'),
  stop:    document.querySelector('.stop.button'),
  reset:   document.querySelector('.reset.button'),
  plus:    document.querySelector('.plus.button'),
  minus:   document.querySelector('.minus.button'),
  reverse: document.querySelector('.reverse.button'),
  normal:  document.querySelector('.normal.button'),
  save:    document.querySelector('.save.button')
};

let historyArray = [];

let counter = makeCounter(1, 0);

timer.textContent = counter.prettyOutput();

buttons.start.addEventListener('click', function(event) {
  if (!counter.isCounting) {
    counter.timerID = setInterval(function() {
      counter();
      timer.textContent = counter.prettyOutput();

      if(counter.isNegativeMode() && (counter.getSeconds() === 0))
        counter.stop();
    }, 1000);

    counter.isCounting = true;
  }
});

buttons.stop.addEventListener('click', function(event) {
  counter.stop();
});

buttons.plus.addEventListener('click', function(event) {
  counter.plus(10);
  timer.textContent = counter.prettyOutput();
});

buttons.minus.addEventListener('click', function(event) {
  counter.minus(10);
  timer.textContent = counter.prettyOutput();
});

buttons.reset.addEventListener('click', function(event) {
  counter.reset();
  timer.textContent = counter.prettyOutput();
});

buttons.reverse.addEventListener('click', function(event) {
  counter.reset();
  let startPoint = +prompt('Введите количество секунд', 0);
  counter = makeCounter(-1, startPoint);
  timer.textContent = counter.prettyOutput();
});

buttons.normal.addEventListener('click', function(event) {
  counter.reset();
  alert('Включен секундомер');
  counter = makeCounter(1, 0);
  timer.textContent = counter.prettyOutput();
});

buttons.save.addEventListener('click', function(event) {
  historyArray.push(counter.prettyOutput());
  addResult(counter.prettyOutput());
});

function addResult(saved) {
  let result = document.createElement('p'); //добавляем p
  history.appendChild(result);
  result.setAttribute('class', 'result');
  result.textContent = saved;
}

function makeCounter(mode, startPoint) {
  let seconds = startPoint;

  function counter () {
    return seconds += mode;
  }

  counter.isCounting = false;

  counter.stop = function() {
    if (counter.timerID) {
      clearInterval(counter.timerID);
      counter.isCounting = false;
      timer.textContent = counter.prettyOutput();
    }
  }

  counter.plus = function(x) {
    seconds += x;
  }

  counter.minus = function(x) {
    if (seconds - x < 0)
      seconds = 0;
    else {
      seconds -= x;
    }
  }

  counter.reset = function() {
    counter.stop();
    seconds = 0;
  }

  counter.getSeconds = function() {
    return seconds;
  }

  counter.isNegativeMode = function() {
    return (mode === -1);
  }

  counter.prettyOutput = function prettyOutput() {
    let sec = seconds % 60;
    let min = Math.floor(seconds / 60);
    let ret = "";

    if (min < 0 || sec < 0)
      return '00:00';
    else  {
      if (min < 10)
        ret += '0';
      ret += min + ':';
      if (sec < 10)
        ret += '0';
      ret += sec;
    }

    return ret;
  }

  return counter;
}
