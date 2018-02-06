export default class Queue {

  constructor(length) {
    this.length_stack = length;
    this.queue = [];
  }

  enqueue(item) {
    if (this.isFull()) return null;
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }

  isEmpty() {
    if (this.queue.length === 0) return true;
  }

  isFull() {
    if (this.queue.length === this.length_stack) return true;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.queue[0];
  }

  get size() {
    return this.queue.length
  }

  sort() {
    return this.queue.sort( (a,b) => a.counter - b.counter );
  }
}
