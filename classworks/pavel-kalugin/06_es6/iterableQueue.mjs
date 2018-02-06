import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  * getIterator() {
    const temp = this.queue.slice();
    while (temp.length > 0) {
      yield temp.shift();
    }
  }
}
