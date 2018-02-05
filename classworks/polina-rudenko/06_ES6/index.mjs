/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

import Queueitem from './queueItem.mjs';
import ExtendedQueue from './iterableQueue.mjs';

const queue = new ExtendedQueue(10);
queue.enqueue(new Queueitem('Ivan', 'Drobysh', 18));
queue.enqueue(new Queueitem('Polina', 'Rudenko', 20));
queue.enqueue(new Queueitem('A', 'A', 56));
queue.enqueue(new Queueitem('B', 'B', 12));
queue.enqueue(new Queueitem('C', 'C', 18));
queue.enqueue(new Queueitem('D', 'D', 5));
queue.sort();
const generator = queue.getIterator()();
for (const element of generator) {
  console.log(element);
}
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.Arr);
console.log(queue.size);
