export default class Queue{
  constructor(maxsize){
    this.maxsize = maxsize;
    this.Arr = [];
  };
  enqueue(element){
    if(this.Arr.length < this.maxsize)
      this.Arr.push(element);
    if(this.Arr.length > this.maxsize)
      this.isFull();
  };
  dequeue (){
    return this.Arr.pop();
  };
  isFull() {
    console.log("Очередь переполнена")
  };
  isEmpty() {
    console.log("Очередь пуста")
  };
  get size() {
    return this.Arr.length
  };
  peek(n) {
    return this.Arr[n];
  };
  sort() {
    this.Arr.sort((a, b)=>{
      const varA = a.age;
      const varB = b.age;
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return comparison;
    })
  };
}
