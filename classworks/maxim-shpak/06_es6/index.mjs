import IterableQueue from './iterableQueue.mjs';
import QueueItem from './queueItem.mjs';

const iterableQueue = new IterableQueue(17);

iterableQueue.enqueue(new QueueItem('Inspiration'));
iterableQueue.enqueue(new QueueItem('Aspiration'));
iterableQueue.enqueue(new QueueItem('Respiration'));
iterableQueue.enqueue(new QueueItem('Intension'));

console.log(iterableQueue.size);

iterableQueue.sort();

const iterator = iterableQueue.getIterator();

/* eslint-disable no-console, no-restricted-syntax */
for (const item of iterator) {
  console.log(item);
}

iterableQueue.dequeue();
iterableQueue.dequeue();
iterableQueue.dequeue();

console.log(iterableQueue.size);
