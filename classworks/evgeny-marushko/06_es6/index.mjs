import IterableQueue from './iterableQueue.mjs';
import QueueItem from './queueItem.mjs';
/* eslint-disable no-console, no-restricted-syntax */
const iq = new IterableQueue(10);
iq.enqueue(new QueueItem(4, 'test'));
iq.enqueue(new QueueItem(3, '2018'));
iq.enqueue(new QueueItem(2, 'js'));
iq.enqueue(new QueueItem(1, 'node'));
console.log(iq.length());
iq.sort();
const iterator = iq.getIterator();
for (const item of iterator) {
  console.log(item);
}
iq.dequeue();
iq.dequeue();
iq.dequeue();
console.log(iq.length());
