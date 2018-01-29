import Queue from './queue.mjs';
export default class IterableQueue extends Queue {
    getIterator () {
        let queue = this.array;
        function* gen () {
            for (let i in queue)
                yield queue[i];
        }
        return gen();
    }
}