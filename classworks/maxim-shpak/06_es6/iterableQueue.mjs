import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    const queueStore = this.queue;
    return (function* iterator() {
      for (let i = 0; i < queueStore.length; i += 1) {
        yield queueStore[i];
      }
    }());
  }
}
