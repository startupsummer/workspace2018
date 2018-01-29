const timer = document.querySelector('.timer');
const SEC_IN_MIN = 60;
const MIN_SEC = 10;
const MIN_TIME = 0;
const ZERO_SYMBOL = "0";
const TIME_SEPARATOR = ":";
const INTERVAL = 1000;

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
};

function parse_prompt(str,separator,limit)
{
  let value = str.split(separator, limit);
  let seconds = Number(value[1]);
  let minutes = Number(value[0]);
  return minutes*SEC_IN_MIN + seconds;
} 

timer.textContent = prompt("Enter time in format[MM:SS]:");
let time = parse_prompt(timer.textContent, TIME_SEPARATOR, 2);
let start_flag = false;
let setInterval_ptr;

let init_time = function(){
  let seconds = time%SEC_IN_MIN;
  let minutes = (time - seconds)/SEC_IN_MIN;
  if(seconds < MIN_SEC){
    seconds = ZERO_SYMBOL + String(seconds);
  }
  if(minutes < MIN_SEC){
    minutes = ZERO_SYMBOL + String(minutes);
  }
  timer.textContent = String(minutes) + TIME_SEPARATOR + String(seconds);
}
let decrement_time = function()
{
  if(time>MIN_TIME)
  {
    time--;
    init_time();
  }
}
let start = function(){
  if(start_flag == false){
    start_flag = true;
    setInterval_ptr = setInterval(decrement_time, INTERVAL);
  }
}
let reset = function(){
  stop();
  time = MIN_TIME;
  start_flag = false;
  init_time();
}
let minus = function(){
  if (time < MIN_SEC){
    time = MIN_TIME;
  }
  else{
    time = time - MIN_SEC;
  }
  init_time();
}
let plus = function(){
  time = time + MIN_SEC;
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
