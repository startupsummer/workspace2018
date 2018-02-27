const SECONDS_MIN = 10;
const MIN_TIME = 0;
const SYMB_ZERO = "0";
const SECONDS_IN_ONE_MINUTE = 60;
const TIME_SEPARATOR = ":";
const INTERVAL = 1000;
const timer = document.querySelector('.timer');
const DEFAULT_DIGITS = 10;

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  timer: document.querySelector('.timer-change.button'),
};

function parse_prompt(str,separator,limit)
{
  let value = str.split(separator, limit);
  let seconds = Number(value[1]);
  let minutes = Number(value[0]);
  return [minutes, seconds]
}

function count_in_seconds(minutes, seconds)
{
  return minutes*SECONDS_IN_ONE_MINUTE + seconds;
}

function init_timer()
{
  stopwatch = !stopwatch;
}

timer.textContent = "00:00"

let time = 0;
let stopwatch = false;
let start_flag = false;
let setInterval_ptr;

let decrement_time = function()
{
  if(time>MIN_TIME)
  {
    time--;
    init_time();
  }
}

let increment_time = function()
{
  time++;
  init_time();
}

let start = function(){
  if(start_flag == false && stopwatch == true){
    start_flag = true;
    setInterval_ptr = setInterval(decrement_time, INTERVAL);
  }
  if(start_flag == false && stopwatch == false){
    start_flag = true;
    setInterval_ptr = setInterval(increment_time, INTERVAL);
  }
}

let reset = function(){
  stop();
  time = MIN_TIME;
  start_flag = false;
  init_time();
}

let minus = function(){
  if (time < SECONDS_MIN){
    time = MIN_TIME;
  }
  else{
    time = time - SECONDS_MIN;
  }
  init_time();
}

let plus = function(){
  time = time + SECONDS_MIN;
  init_time();
}

let stop = function(){
  clearTimeout(setInterval_ptr);
  start_flag = false;
}

let init_time = function(){
  let seconds = time % SECONDS_IN_ONE_MINUTE;
  let minutes = (time - seconds) / SECONDS_IN_ONE_MINUTE;

  if(seconds < SECONDS_MIN){
    seconds = SYMB_ZERO + String(seconds);
  }

  if(minutes < SECONDS_MIN){
    minutes = SYMB_ZERO + String(minutes);
  }

  timer.textContent = String(minutes) + TIME_SEPARATOR + String(seconds);
}


buttons.stop.addEventListener('click', stop, false);
buttons.plus.addEventListener('click', plus, false);
buttons.minus.addEventListener('click', minus, false);
buttons.reset.addEventListener('click', reset, false);
buttons.start.addEventListener('click', start, false);
buttons.timer.addEventListener('click', init_timer, false);
