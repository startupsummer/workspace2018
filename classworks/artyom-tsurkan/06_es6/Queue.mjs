class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.store = [];
  }

  enqueue(item) {
    if (this.isFull()) {
      return console.log('Store is full!');
    }
    return this.store.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return console.log('Store is empty!');
    }
    return this.store.shift();
  }

  isEmpty() {
    return (this.size === 0);
  }

  isFull() {
    return this.size >= this.maxSize;
  }

  peek() {
    if (this.isEmpty()) {
      return console.log('Store is empty!');
    }
    return this.store[0];
  }

  get size() {
    return this.store.length;
  }

  sort(comparator) {
    return this.store.sort((a, b) => {
      if (a[comparator] > b[comparator]) {
        return 1;
      }
      if (a[comparator] < b[comparator]) {
        return -1;
      }

      return 0;
    });
  }
}

export default Queue;
