class MinHeap {
  
  constructor(k) {
    this.nodes = [];
    this.k = k;
  }
  
  add(element) {
    if (this.nodes.length === this.k) {
      if (element > this.nodes[0]) {
        this.nodes[0] = element;
        this.bubbleDown(0);
      }
    } else {
      this.nodes.push(element);
      this.bubbleUp(this.nodes.length -1);
    }
    
    return this.nodes[0];
  }
  
  bubbleUp(index) {
    const parent = Math.floor((index - 1) / 2);
    
    if (parent > -1 && this.nodes[index] < this.nodes[parent]) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }
  }
  
  bubbleDown(index) {
    const leftChild = (2 * index) + 1;
    const rightChild = (2 * index) + 2;
    
    if (this.nodes[leftChild] < this.nodes[index]) {
      this.swap(index, leftChild);
      this.bubbleDown(leftChild);
    } else if (this.nodes[rightChild] < this.nodes[index]) {
      this.swap(index, rightChild);
      this.bubbleDown(rightChild);
    }
  }
  
  swap(childIndex, parentIndex) {
    const child = this.nodes[childIndex];
    const parent = this.nodes[parentIndex];
    
    this.nodes[childIndex] = parent;
    this.nodes[parentIndex] = child;
  }

}