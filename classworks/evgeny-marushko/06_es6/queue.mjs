/* eslint-disable linebreak-style */
import QueueItem from './queueItem.mjs';

export default class Queue {
  constructor(size) {
    this.size = size;
    this.arr = [];
  }
  length() {
    return this.arr.length;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  isFull() {
    return this.arr.length === this.size;
  }
  enqueue(item) {
    if (!(item instanceof QueueItem)) {
      throw new Error('Only for QueueItem');
    } else if (!(this.arr.length < this.size)) {
      throw new Error('Queue is full');
    } else {
      this.arr.push(item);
    }
  }
  dequeue() {
    return this.arr.shift();
  }
  peek() {
    if (!this.isEmpty()) {
      return this.arr[0];
    } else {
      throw new Error ('Queue is empty');
    }
  }
  sort() {
    const compare = (a, b) => a.id - b.id;
    this.arr.sort(compare);
  }
}
