class queue {
  constructor(MaxSize) {
    this.MaxSize = MaxSize;
    this.arr = [];
  }
  enqueue(item) {
    if (this.arr.length === this.MaxSize) {
      console.log('Queue overflow');
      return 1;
    }
    this.arr.push(item);
    return 0;
  }
  dequeue() {
    return this.arr.shift();
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  isFull() {
    return this.arr.length === this.size;
  }
  peek() {
    return this.arr[0];
  }
  get size() {
    return this.arr.length;
  }
  sort() {
    this.arr.sort((item1, item2) => item1.value - item2.value);
  }
}
export default queue;
