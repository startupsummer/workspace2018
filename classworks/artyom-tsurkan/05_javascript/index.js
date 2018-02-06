const timer = document.querySelector('.timer');
const results = document.querySelector('.results');

const buttons = {
  start: document.querySelector('.start.button'),
  stop: document.querySelector('.stop.button'),
  reset: document.querySelector('.reset.button'),
  plus: document.querySelector('.plus.button'),
  minus: document.querySelector('.minus.button'),
  mode: document.querySelector('.mode.button'),
  addResult: document.querySelector('.add-result.button'),
};

timer.textContent = '00:00';

const timeChanger = {
  ms: 0,
  interval: 0,
  isStarted: false,
  mode: 'stopwatch',

  add: function (count) {
    this.ms += count;
  },

  update: function (count) {
    this.add(count);
    this.render();
  },

  render: function () {
    timer.textContent = (new Date(this.ms)).toISOString().substr(14, 5);
  },

  start: function () {
    if (!this.isStarted) {
      this.interval = setInterval(() => {
        let count = (this.mode === 'stopwatch') ? 1000 : -1000;
        this.update(count)
      }, 1000);
      this.isStarted = true;
    }
  },

  stop: function () {
    clearInterval(this.interval);
    this.isStarted = false;
  },

  plus: function () {
    this.update(10000);
  },

  minus: function () {
    this.update(-10000);
  },

  reset: function () {
    this.stop();
    this.ms = 0;
    this.render();
    this.isStarted = false;
  },

  changeMode: function () {
    this.mode = (this.mode === 'stopwatch') ? 'timer' : 'stopwatch';
    buttons.mode.textContent = (this.mode === 'stopwatch') ? 'Секундомер' : 'Таймер';
  },

  addResult: function () {
    console.log('addResult');
    results.innerHTML += `<li>${timer.textContent}</li>`;
    results.scrollTop = results.scrollHeight;
  },
};

buttons.start.addEventListener('click', () => timeChanger.start());
buttons.stop.addEventListener('click', () => timeChanger.stop());
buttons.plus.addEventListener('click', () => timeChanger.plus());
buttons.minus.addEventListener('click', () => timeChanger.minus());
buttons.reset.addEventListener('click', () => timeChanger.reset());
buttons.mode.addEventListener('click', () => timeChanger.changeMode());
buttons.addResult.addEventListener('click', () => timeChanger.addResult());