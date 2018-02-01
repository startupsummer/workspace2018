/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

import IterableQueue from './iterableQueue.mjs';
import QueueItem from './queueItem.mjs';

const iterableQueue = new IterableQueue(10);
iterableQueue.enqueue(new QueueItem('John', 'Doe', 21));
iterableQueue.enqueue(new QueueItem('Mary', 'Jekyll', 11));
iterableQueue.enqueue(new QueueItem('Robert', 'Brown', 46));
iterableQueue.enqueue(new QueueItem('Linda', 'Mad', 33));
iterableQueue.enqueue(new QueueItem('Kitten', 'Little', 4));
iterableQueue.enqueue(new QueueItem('Mia', 'Young', 18));
console.log(iterableQueue.size);
iterableQueue.sort('surname');
const generator = iterableQueue.getIterator()();
for (const element of generator) {
  console.log(element);
}
iterableQueue.dequeue();
iterableQueue.dequeue();
iterableQueue.dequeue();
console.log(iterableQueue.size);
