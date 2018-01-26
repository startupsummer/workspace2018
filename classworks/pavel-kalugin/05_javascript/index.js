const timer = document.querySelector('.timer');

const buttons = {
  start:  document.querySelector('.start.button'),
  stop:   document.querySelector('.stop.button'),
  reset:  document.querySelector('.reset.button'),
  plus:   document.querySelector('.plus.button'),
  minus:  document.querySelector('.minus.button'),
};

const counter = makeCounter();

timer.textContent = counter.prettyOutput();

buttons.start.addEventListener('click', function(event) {
  if (!counter.isCounting) {
    counter.timerID = setInterval(function() {
      counter();
      timer.textContent = counter.prettyOutput();
    }, 1000);
    counter.isCounting = true;
  }
});

buttons.stop.addEventListener('click', function(event) {
  if (counter.timerID) {
    clearInterval(counter.timerID);
    counter.isCounting = false;
  }
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

function makeCounter() {
  let seconds = 0;

  function counter () {
    return ++seconds;
  }

  counter.isCounting = false;

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
    seconds = 0;
  }

  counter.prettyOutput = function prettyOutput() {
    let x = seconds;
    if (x < 0) return '00:00';
    else if (x < 10) return '00:0' + x;
    else if (x < 60) return '00:' + x;
    else if (x < 600) return '0' + Math.floor(x / 60) + ':' + x % 60;
    else return '' + Math.floor(x / 60) + ':' + x % 60;
  }

  return counter;
}
