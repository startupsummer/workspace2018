import { Queue } from './queue.mjs';

export class IterableQueue extends Queue {
  getIterator() {
    const self = this;
    function* generator() {
      let temp = self.head;
      while (temp !== null) {
        yield temp.value;
        temp = temp.next;
      }
    }

    const gen = generator();

    return gen;
  }
}
