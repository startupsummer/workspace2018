import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    const queue = this.array;
    function* gen() {
      yield Object.values(queue);
    }
    return gen();
  }
}
