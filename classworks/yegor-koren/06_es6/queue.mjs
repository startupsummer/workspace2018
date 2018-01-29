import {QueueItem} from './queueItem.mjs'

export class Queue {
  constructor(number) {
    this.queue = [];
    this.length = 0;
    this.number = number;
  }
  isEmpty() {
    if (this.length) return false;
    else return true;
  }
  isFull() {
    if (this.length == this.number) return true;
    else return false;
  }
  enqueue(data) {
    if (this.isFull()) {
      return "queue is full";
    }
    else this.queue.push(new QueueItem(data));
    this.length++;
    return 'en';
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    else {
      this.length--;
      return this.queue.shift();
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    else return this.queue[0];
  }
  get size() {
    return this.length;
  }
  sort(prop) {
    this.queue.sort((a, b) => a[prop] - b[prop]);
    return "sort";
  }
}
