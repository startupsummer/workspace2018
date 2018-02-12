import Queue from './queue.mjs';

export default class IterableQueue extends Queue {
  getIterator() {
    const main = this;
    return function* gen(){
      for(let element in main.queue.reverse()) {
       yield main.queue[element];
      }
    }
  }
}
