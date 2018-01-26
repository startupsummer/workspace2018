const timer = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  addResult: document.querySelector('.addresult.button'),
  switchState: document.querySelector('.switch.button'),
};

timer.textContent = '00:00';

let secs = 0;
let mins = 0;
let interval;
let isStarted = false;
let state = 'stopwatch';

let time = () => {
	if (state == 'stopwatch') {
		secs++;
		if (secs == 60) {
			secs = 0;
			mins++;
		}
	} else {
		secs--;
		if (secs == 0) {
			if (mins > 0) {
				secs = 59;
				mins--;
			} else {
				stop();
				alert('Время вышло!');
			} 
		}
	}
	updateTime();
};

let updateTime = () => {
	let textSecs;
	let textMins;
	if (secs < 10) {
		textSecs = '0' + secs;
	} else {
		textSecs = secs;
	}
	if (mins < 10) {
		textMins = '0' + mins;
	} else {
		textMins = mins;
	}
	timer.textContent = textMins + ':' + textSecs;
};

let start = () => {
	if (!isStarted) {
		interval = setInterval(time, 1000);
		isStarted = true;
	}
}

let stop = () => {
	if (isStarted) {
		window.clearInterval(interval);
		isStarted = false;
	}
}

let reset = () => {
	mins = 0;
	secs = 0;
	stop();
	updateTime();
}

let plusSecs = () => {
	if (secs < 50) {
		secs+= 10;
	} else {
		mins++;
		secs = secs % 50;
	}
	updateTime();
};

let munisSecs = () => {
	if (secs >= 10) {
		secs-= 10;
	} else {
		if (mins > 0) {
			secs = (10 - secs) + 50;
			if (secs == 60) { //bug fix
				secs = 0;
			}
			mins--;
		}
	}
	updateTime();
};

let addResult  = () => {
	results.innerHTML += `<li class="result">${timer.textContent}</li>`;
};

let switchState = () => {
	if (state == 'timer') {
		state = 'stopwatch';
	} else {
		state = 'timer';
	}
}

buttons.plus.addEventListener('click', plusSecs);
buttons.minus.addEventListener('click', munisSecs);
buttons.start.addEventListener('click', start);
buttons.stop.addEventListener('click', stop);
buttons.reset.addEventListener('click', reset);

buttons.addResult.addEventListener('click', addResult);
buttons.switchState.addEventListener('click', switchState);


