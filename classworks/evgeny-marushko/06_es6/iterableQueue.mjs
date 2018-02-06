/* eslint-disable linebreak-style */
import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    let arr = this.arr;
    return (function* iterator() {
      for (let i = 0; i < arr.length; i++) {
        yield arr[i];
      }
    }());
  }
}
