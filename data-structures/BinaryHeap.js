// left i * 2;
// right i * 2 + 1
// parent i / 2

class MinHeap {
  
  constructor() {
    this.heap = [null];
  }
  
  insert(value) {
    this.heap.push();
    if (this.heap.length > 2) this.bubbleUp();
  }
  
  remove() {
    const smallest = this.heap[1];
    
    const lastPos = this.heap.length - 1;
    
    const lastValue = this.heap[lastPos];
    
    this.heap.slice(lastPos, 1);
    
    this.heap[1] = lastValue;
    
    this.bubbleDown();
    
    return smallest;
  }
  
  bubbleDown() {
    let idx = 1;
    let left = idx * 2;
    let right = (idx * 2) + 1;
    
    while(this.heap[idx] >= this.heap[left] || this.heap[idx] >= this.heap[right]) {
      if(this.heap[left] < this.heap[right]) {
        [this.heap[left], this.heap[idx]] = [this.heap[idx], this.heap[left]];
        left = idx * 2;
      } else {
        [this.heap[right], this.heap[idx]] = [this.heap[idx], this.heap[right]];
        right = (idx * 2) + 1;
      }
      
      left = idx * 2;
      right = (idx * 2) + 1;
      
      if(this.heap[left] === undefined || this.heap[right] === undefined) break;
      
    }
          
  }
  
  bubbleUp() {
    let currIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currIndex / 2);
    
    while(this.heap[currIndex] < this.heap[parentIndex]) {
      if(currIndex >= 1) {
       [this.heap[parent], this.heap[item]] = [this.heap[item], this.heap[parent]]; 
        if (parentIndex > 1) {
          currentIndex = parent;
          parentIndex = Math.floor(currentIndex / 2);
        } else {
          break;
        }
      }
    } 
  }
  
}