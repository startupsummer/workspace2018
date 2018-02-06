import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    const self = this;
    return function* iterate() {
      const queue = self.queue.reverse();
      for (let i = 0; i < queue.length; i += 1) {
        yield queue[i];
      }
    };
  }
}
