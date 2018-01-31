import QueueItem from './queueItem.mjs';
import IterableQueue from './iterableQueue.mjs';

const queue = new IterableQueue(5);
queue.enqueue(new QueueItem(3));
queue.enqueue(new QueueItem(2));
queue.enqueue(new QueueItem(1));
queue.enqueue(new QueueItem(5));
queue.enqueue(new QueueItem(4));

/* eslint-disable no-console, no-restricted-syntax */
console.log(queue.size);
queue.sort();
for (const item of queue.getIterator()) {
  console.log(item);
}
queue.dequeue();
queue.dequeue();
console.log(queue.size);
