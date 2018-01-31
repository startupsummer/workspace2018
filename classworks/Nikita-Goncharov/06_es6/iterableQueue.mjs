import queue from './queue.mjs';

class iterableQueue extends queue {
  getIterator() {
    const itQueue = this;
    return function* generator() {
      for (let i = 0; i < itQueue.size; i += 1) {
        yield itQueue.arr[i];
      }
    };
  }
}
export default iterableQueue;
