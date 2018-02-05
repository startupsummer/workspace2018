import QueueItem from './queueItem.mjs';
import IterableQueue from './iterableQueue.mjs';

const itQ = new IterableQueue(5);

const obj = new QueueItem(0);
const obj1 = new QueueItem(1);
const obj2 = new QueueItem(2);
const obj3 = new QueueItem(3);

itQ.enqueue(obj1);
itQ.enqueue(obj3);
itQ.enqueue(obj2);
itQ.enqueue(obj);

console.log(itQ.size);

itQ.sort();

const g = itQ.getIterator();
for(const iterator of g()) {
  console.log(iterator);
}

itQ.dequeue();
itQ.dequeue();
itQ.dequeue();

console.log(itQ.size);
