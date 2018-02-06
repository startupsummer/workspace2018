import { QueueItem } from './queueItem.mjs';

export class Queue {
  constructor(maxSize) {
    this.currentSize = 0;
    this.maxSize = maxSize;
    this.head = this.tail = null;
  }

  enqueue(value) {
    const temp = new QueueItem(value);
    if (this.head === null) {
      this.head = this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = temp;
      temp.next = null;
    }
    this.currentSize = this.currentSize + 1;
  }
  dequeue() {
    if (this.head !== null) {
      const del = this.head.val;
      this.head = this.head.next;
      this.currentSize = this.currentSize - 1;
      return del;
    }
    return console.log("You can't delete a value from an Empty queue");
  }
  isEmpty() {
    return this.head === null;
  }
  isFull() {
    this.currentSize === this.maxSize;
  }
  peek() {
    return this.head;
  }
  get getSize() {
    return this.currentSize;
  }
  sort() {
    let tempLength = this.currentSize;
    const head = this.head;
    let temp;
    for (let iter = 0; iter < tempLength; tempLength = tempLength-1) {
      temp = this.head;
      let curPos = 0;
      while (curPos <= tempLength) {
        if (temp.next.value > temp.value) {
          let index = temp.next.next;
          temp.next.next = temp;
          temp.next = index;
          curPos += 1;
          continue;
        }
        curPos += 1;
        temp = temp.next;
      }
    }
  }

}
