const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  invoice: document.querySelector('.invoice.button'),
  stopwatch: document.querySelector('.stopwatch.button'),
};

let timerStart= false;
let min=0;
let sec=0;
let timerId;
let invoiceID= false;

timer.textContent = "00:00";

function startTimer(){
  if(!invoiceID){
  if (!timerStart){
  timerId = window.setInterval(addTime, 1000);
  timerStart = true;
}}
else{
  if (!timerStart){
  timerId = window.setInterval(minusTime, 1000);
  timerStart = true;
}
}
}

function minusTime(){
  if(sec==0 & min==0){
    sec++;
    clearInterval(timerId);
    alert("Время вышло!!!")
    }
  if(sec>0){
    sec--;
  }
  else {
  min--;
  sec=59;
  }
  timer.textContent = addMinuts() +":"+ addSeconds();
}

function addTime(){
  if(sec<59){
    sec++;
  }
  else {
  min++;
  sec=0;
  }
  timer.textContent = addMinuts() +":"+ addSeconds();
}

function addMinuts(){
  if (min<10) return "0"+min;
  else return min;
}

function addSeconds(){
  if (sec<10) return "0"+sec;
  else return sec;
}

function stopTimer(){
  clearInterval(timerId);
  timerStart=false;
}

function addTenSec(){
  if(sec<=49){
    sec+=10;
  }
  else{
    min+=1;
    sec=sec-50;
  }
timer.textContent = addMinuts() +":"+ addSeconds();
}

function minusTenSec(){
  if(sec>=10){
    sec-=10;
  }
  else{
    if(min>0){
    min-=1;
    sec=sec+50;
  }
  else resetTimer();
  }
timer.textContent = addMinuts() +":"+ addSeconds();
}

function resetTimer(){
  sec=0;
  min=0;
  timer.textContent = addMinuts() +":"+ addSeconds();
}

function startInvoice(){
  stopTimer();
  invoiseContent = Number(prompt('Введите время отсчёта в секундах ', "60"));
      console.log(invoiseContent);
  if (isNaN(invoiseContent)){
    alert('Error: Введите время в секундах');
  }
  if (invoiseContent ){
      min=Math.floor(invoiseContent / 60);;
      sec=invoiseContent % 60;;
      invoiceID=true;
      timer.textContent = addMinuts() +":"+ addSeconds();
  }
  if (invoiseContent==0){
  min=0;
  sec=0;
  timer.textContent = "00:00";
  }
  }

function stopwatch(){
 invoiceID= false;
}


buttons.start.addEventListener("click", startTimer);
buttons.stop.addEventListener("click", stopTimer);
buttons.plus.addEventListener("click", addTenSec);
buttons.minus.addEventListener("click", minusTenSec);
buttons.reset.addEventListener("click", resetTimer);
buttons.invoice.addEventListener("click", startInvoice);
buttons.stopwatch.addEventListener("click", stopwatch);
