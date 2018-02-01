import IterableQueue from './iterableQueue.mjs';
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const number = 5;
const queue = new IterableQueue(number);
console.log(queue.size);
console.log(queue.dequeue());
console.log(queue.peek());

console.log(queue.enqueue(2));
console.log(queue.enqueue(5));
console.log(queue.enqueue(1));
console.log(queue.enqueue(4));
console.log(queue.enqueue(3));
console.log(queue.enqueue(11));

console.log(queue.size);
console.log(queue.peek());
console.log(queue.sort('data'));

console.log('-----------------');
const generator = queue.getIterator()();
for (const key of generator) {
  console.log(key);
}
console.log('-----------------');

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size);
