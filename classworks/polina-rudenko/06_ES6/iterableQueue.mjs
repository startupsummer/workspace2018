import Queue from './queue.mjs'

export default class ExtendedQueue extends Queue{
  getIterator(){
    const main = this;
    return function* gen(){
      for(let element in main.Arr.reverse()) {
       yield main.Arr[element];
    }
  }
}
}
