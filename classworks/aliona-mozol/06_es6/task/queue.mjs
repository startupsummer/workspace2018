export default class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
  }

  enqueue(element) {
    if(this.isFull()) {
      console.log("Overflow!!!");
    } else  {
      this.queue.push(element);
    }
  }

  dequeue() {
    if(!this.isEmpty()) {
      return this.queue.shift();
    }
  }

  isEmpty() {
    return this.queue.length == 0;
  }

  isFull() {
    return this.queue.length == this.capacity;
  }

  peek() {
    return this.queue.peek();
  }

  get size() {
    return this.queue.length;
  }

  sort(key) {
    this.queue.sort((a, b) => {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = -1;
      } else if (varA < varB) {
        comparison = 1;
      }

      return comparison;
    });
  }

  toString() {
    return this.queue.reverse();
  }
}
