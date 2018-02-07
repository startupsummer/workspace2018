const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
};

const counter = addCounter();

timer.textContent = counter.output();

function addCounter(){
  let seconds = 0;
  counter.isCounting = false;

  function counter(){
    return seconds++;
  }

  counter.minus = function(s){
    if ((seconds - s) < 0) {
      seconds = 0;
    } else {
      seconds -= s;
    }
  }

  counter.plus = function(s){
    seconds += s;
  }

  counter.reset = function(){
    seconds = 0;
  }
  
  counter.output = function output(){
    let x = seconds;
    if (x < 0) return '00:00';
    else if (x < 10) return '00:0' + x;
    else if (x < 60) return '00:' + x;
    else if (x < 600) return '0' + Math.floor(x / 60) + ':' + x % 60;
    else return '' + Math.floor(x / 60) + ':' + x % 60;
  }

  return counter;
}

buttons.start.addEventListener('click', function() {
    if (!counter.isCounting) {
      counter.timerID = setInterval(function() {
        counter();
        timer.textContent = counter.output();
      }, 1000);
      counter.isCounting = true;
    }
  });

buttons.stop.addEventListener('click', function(){
  if (counter.isCounting){
    clearInterval(counter.timerID);
    counter.isCounting = false;
  } 
});

buttons.reset.addEventListener('click', function(){
  counter.reset();
  timer.textContent = counter.output();
});

buttons.minus.addEventListener('click', function(){
  counter.minus(10);
  timer.textContent = counter.output();
});

buttons.plus.addEventListener('click', function(){
  counter.plus(10);
  timer.textContent = counter.output();
});