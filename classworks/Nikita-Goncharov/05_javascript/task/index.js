const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
};

timer.textContent = "00:00";
let time = 0;
let start_flag = false;
let setInterval_ptr;

let init_time = function(){
  let seconds = time%60;
  let minutes = (time - seconds)/60;
  if(seconds < 10){
    seconds = "0" + String(seconds);
  }
  if(minutes < 10){
    minutes = "0" + String(minutes);
  }
  timer.textContent = String(minutes)+ ":" + String(seconds);
}
let increment_time = function()
{
  time++;
  init_time();
}
let start = function(){
  if(start_flag == false){
    start_flag = true;
    setInterval_ptr = setInterval(increment_time, 1000);
  }
}
let reset = function(){
  stop();
  time = 0;
  start_flag = false;
  init_time();
}
let minus= function(){
  if (time < 10){
    time = 0;
  }
  else{
    time = time - 10;
  }
  init_time();
}
let plus = function(){
  time = time + 10;
  init_time();
}
let stop = function(){
  clearTimeout(setInterval_ptr);
  start_flag = false;
}

buttons.stop.addEventListener('click', stop, false);
buttons.plus.addEventListener('click', plus, false);
buttons.minus.addEventListener('click', minus, false);
buttons.reset.addEventListener('click', reset, false);
buttons.start.addEventListener('click', start, false);
