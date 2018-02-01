import Queue from './queue.mjs';
/* eslint-disable no-restricted-syntax */

export default class IterableQueue extends Queue {
  getIterator() {
    const time = this;
    return function* generator() {
      for (const key of time.queue) {
        yield key;
      }
    };
  }
}
