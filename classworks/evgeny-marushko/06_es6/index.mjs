import Queue from "./queue.mjs";
import IterableQueue from "./iterableQueue.mjs";
import QueueItem from "./queueItem.mjs"
const iq = new IterableQueue(10);
iq.enqueue(new QueueItem(4, 'test'));
iq.enqueue(new QueueItem(3, '2018'));
iq.enqueue(new QueueItem(2, 'js'));
iq.enqueue(new QueueItem(1, 'node'));
iq.sort();
const iterator = iq.getIterator();
for(let item of iterator) {
	console.log(item);
}
iq.dequeue();
iq.dequeue();
iq.dequeue();
console.log(iq.size);