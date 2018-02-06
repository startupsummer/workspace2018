import { IterableQueue } from './iterableQueue.mjs';
import { QueueItem } from './queueItem.mjs';
import { Queue } from './queue.mjs';

const queue = new IterableQueue(6);
queue.enqueue(93);
queue.enqueue(13);
queue.enqueue(73);
queue.enqueue(2);
queue.enqueue(123);
console.log(queue);
console.log(queue.getSize);

queue.sort();

for (const value of queue.getIterator()) {
  console.log(value);
}
queue.dequeue();
queue.dequeue();

console.log(queue.getSize);

