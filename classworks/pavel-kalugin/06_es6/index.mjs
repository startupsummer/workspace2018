/* eslint-disable no-restricted-syntax, no-console */

import IterableQueue from './iterableQueue.mjs';
import QueueItem from './queueItem.mjs';

const iq = new IterableQueue(10);

for (let i = 0; i < 10; i += 1) {
  iq.enqueue(new QueueItem('Jhon Smith', i));
}

console.log(iq.size);

iq.sort((o1, o2) => o1.id < o2.id);

for (const item of iq.getIterator()) {
  console.log(item);
}

iq.dequeue();
iq.dequeue();

console.log(iq.size);
