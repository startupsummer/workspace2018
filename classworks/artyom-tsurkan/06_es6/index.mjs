import IterableQueue from './IterableQueue.mjs';
import QueueItem from './QueueItem.mjs';

const firstQueue = new IterableQueue(5);

firstQueue.enqueue(new QueueItem('Metallica', 'Load'));
firstQueue.enqueue(new QueueItem('Nirvana', 'Nevermind'));
firstQueue.enqueue(new QueueItem('Metallica', 'Black Album'));
firstQueue.enqueue(new QueueItem('The Offspring', 'Americana'));
firstQueue.enqueue(new QueueItem('Bon Jovi', 'Keep the Faith'));

console.log(firstQueue.size);

firstQueue.sort('band');

const iterator = firstQueue.getIterator();
for (const item of iterator) {
  console.log(item);
}

firstQueue.dequeue();
firstQueue.dequeue();

console.log(firstQueue.size);
