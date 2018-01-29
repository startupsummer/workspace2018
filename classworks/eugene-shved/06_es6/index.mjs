/* eslint-disable no-console, no-restricted-syntax */
import QueueItem from './queueItem.mjs';
import IterableQueue from './iterableQueue.mjs';

const queue = new IterableQueue(8);

queue.enqueue(new QueueItem(2, 'Coco'));
queue.enqueue(new QueueItem(1, 'Angry Bird'));
queue.enqueue(new QueueItem(3, 'Pirat'));
queue.enqueue(new QueueItem(1, 'Angry Bird'));

console.log(queue.size);
queue.sort();

const generator = queue.getIterator()();
for (const element of generator) {
  console.log(element);
}

queue.dequeue();
queue.dequeue();

console.log(queue.size);
