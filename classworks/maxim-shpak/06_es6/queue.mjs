import QueueItem from './queueItem.mjs';

class Queue {
  constructor(maxSize = 100) {
    this.maxSize = maxSize;
    this.queue = [];
  }
  enqueue(element) {
    if (element instanceof QueueItem) {
      if (this.queue.length !== this.maxSize) {
        this.queue = [...this.queue, element];
      } else {
        throw new Error('Queue is full.');
      }
    } else {
      throw new Error('Unexpected element type.');
    }
  }
  dequeue() {
    return this.queue.shift();
  }
  isEmpty() {
    return !this.queue.length;
  }
  isFull() {
    return this.queue.length === this.maxSize;
  }
  peek() {
    if (this.queue.length) {
      return this.queue.slice(0, 1);
    }
    throw new Error('Queue is empty.');
  }
  get size() {
    return this.queue.length;
  }
  sort() {
    this.queue.sort();
  }
}

export default Queue;
