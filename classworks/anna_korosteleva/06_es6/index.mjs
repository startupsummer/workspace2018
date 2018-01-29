import IterableQueue from './iterableQueue.mjs';
import QueueItem from './queueItem.mjs';

const q1 = new IterableQueue(4);
const element1 = new QueueItem(1);
const element2 = new QueueItem(2);
const element3 = new QueueItem(3);
const element4 = new QueueItem(4);
q1.enqueue(element4);
q1.enqueue(element2);
q1.enqueue(element3);
q1.enqueue(element1);
q1.getSize();
q1.sort();
const genObj = q1.getIterator();
for (const value of genObj) {
    console.log(value); // eslint-disable-line
}
q1.dequeue();
q1.dequeue();
q1.getSize();
