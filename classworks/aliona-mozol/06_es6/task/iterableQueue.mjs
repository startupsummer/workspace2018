import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    const self = this;
    return function* iterate() {
      for(let element in self.queue.reverse()) {
        yield self.queue[element];
      }
    };
  }
}
