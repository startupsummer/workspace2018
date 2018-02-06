export default class Queue{
    constructor(maxSize){
        this.size = 0;
        this.maxSize = maxSize;
        this.queue = [];
    }

    enqueue(element){
        if(this.isFull()){
            console.log("Queue is full"); // eslint-disable-line
        } else{
            this.size++;
            console.log(`${element.name} added`) // eslint-disable-line
            return this.queue.push(element);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty"); // eslint-disable-line
        } else{
            this.size--;
            return console.log(this.queue.shift()); // eslint-disable-line
        }
    }

    isEmpty(){
        if(this.size === 0){
            return true;
        } else {
            return false;
        }
    }

    isFull(){
        if(this.size === this.maxSize){
            return true;
        } else {
            return false;
        }
    }

    peek(){
        return this.queue[0];
    }

    sort(){
        this.queue.sort(compare);
    }

    get size(){
        return console.log(this.size); // eslint-disable-line
    }
}

function compare(a, b){
    return a.name - b.name;
}
