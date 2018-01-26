const field = document.querySelector('.timer');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  addResult: document.querySelector('.addresult.button'),
  switchState: document.querySelector('.switch.button'),
};

field.textContent = '00:00';

let timer = {
	interval: null,
	secs: 0,
	isStarted: false,
	state: 'stopwatch',
	getMins: () => {
		let result = parseInt(timer.secs/60);
		if (result < 10) {
			return '0' + result;
		} else {
			return result;
		}
	},
	getSecs: () => {
		let result = timer.secs % 60;
		if (result < 10) {
			return '0' + result;
		} else {
			return result;
		}
	},
	toField: () => {
		field.textContent = timer.getMins() + ':' + timer.getSecs();
	},
	tick: () => {
		if (timer.state == 'stopwatch') {
			timer.secs++;
		} else {
			timer.secs--;
			if (timer.secs == 0) {
				timer.stop();
			}
		}
		timer.toField();
	},
	start: () => {
		if (!timer.isStarted) {
			timer.interval = setInterval(timer.tick, 1000);
			timer.isStarted = true;
		};
	},
	stop: () => {
		if (timer.isStarted) {
			window.clearInterval(timer.interval);
			timer.isStarted = false;
		};
	},
	plus: () => {
		timer.secs += 10;
		timer.toField();
	},
	minus: () => {
		if (timer.secs >= 10) {
			timer.secs -= 10;
			timer.toField();
		}
	},
	addResult: () => {
		results.innerHTML += `<li class="result">${field.textContent}</li>`;
	},
	switchState: () => {
		if (timer.state == 'timer') {
			timer.state = 'stopwatch';
		} else {
			timer.state = 'timer';
		}
	},
	reset: () => {
		timer.secs = 0;
		timer.toField();
	}
}

buttons.plus.addEventListener('click', timer.plus);
buttons.minus.addEventListener('click', timer.minus);
buttons.start.addEventListener('click', timer.start);
buttons.stop.addEventListener('click', timer.stop);
buttons.reset.addEventListener('click', timer.reset);

buttons.addResult.addEventListener('click', timer.addResult);
buttons.switchState.addEventListener('click', timer.switchState);
