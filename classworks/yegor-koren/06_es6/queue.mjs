import QueueItem from './queueItem.mjs';

export default class Queue {
  constructor(number) {
    this.queue = [];
    this.length = 0;
    this.number = number;
  }
  isEmpty() {
    if (this.length) return false;
    return true;
  }
  isFull() {
    if (this.length === this.number) return true;
    return false;
  }
  enqueue(data) {
    if (this.isFull()) {
      return 'queue is full';
    }
    this.queue.push(new QueueItem(data));
    this.length += 1;
    return 'en';
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'queue is empty';
    }

    this.length -= 1;
    return this.queue.shift();
  }
  peek() {
    if (this.isEmpty()) {
      return 'queue is empty';
    }
    return this.queue[0];
  }
  get size() {
    return this.length;
  }
  sort(prop) {
    this.queue.sort((a, b) => a[prop] - b[prop]);
    return 'sort';
  }
}
