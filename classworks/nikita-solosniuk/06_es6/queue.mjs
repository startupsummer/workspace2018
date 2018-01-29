export default class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.array = [];
    };
    isEmpty() {
        return this.array.length === 0;
    };

    isFull() {
        return this.array.length === this.maxSize;
    }

    enqueue (element) {
        if (!this.isFull())
            this.array.push(element);
        else console.log('No space');
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.array.shift();
        }
        else {
            console.log('Already empty');
        }
    }

    peek() {
        return this.array[0];
    };

    get size() {
        return this.array.length;
    }

    sort() {
        this.array.sort((a,b) => a.field-b.field);
    }
}