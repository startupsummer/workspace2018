import Queue from './Queue.mjs';

class IterableQueue extends Queue {
  getIterator() {
    const store = this.store;

    return (function* iterator() {
      for (let i = 0; i < store.length; i++) {
        yield store[i];
      }
    })()
  }
}

export default IterableQueue;
