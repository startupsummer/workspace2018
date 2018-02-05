import Queue from './queue.mjs';

export default class ExtendedQueue extends Queue {
  getIterator() {
    const main = this;
    return function* gen() {
      const queue = main.Arr.reverse();
      for (let i = 0; i < queue.length; i += 1) {
        yield queue[i];
      }
    };
  }
}
