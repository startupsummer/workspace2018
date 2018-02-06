export default class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.queue.push(element);
    } else {
      throw new Error('Too much elements');
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return !!(this.size === 0);
  }

  isFull() {
    return this.size >= this.capacity;
  }

  peek() {
    return this.queue[0];
  }

  get size() {
    return this.queue.length;
  }

  sort(comparator) {
    this.queue.sort(comparator);
  }
}
