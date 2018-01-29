import Queue from './queue.mjs';
import QueueItem from "./queueItem.mjs"
export default class IterableQueue extends Queue {
	getIterator() {
		let arr = this.arr;
		return (function* iterator() {
			for(let i = 0; i < arr.length; i++) {
				yield arr[i];
			}
		})()
	}
}