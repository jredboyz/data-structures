class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.numKeys = 0;
    this.nextOut = 0;
  }

  enqueue(value) {
    this.numKeys++;
    this.storage[this.numKeys] = value;
  }

  dequeue() {
    if (this.size()) {
      this.nextOut++;
      var removed = this.storage[this.nextOut];
      delete this.storage[this.nextOut];
      return removed;
    }
  }

  size() {
    return this.numKeys - this.nextOut;
  }

}

var someInstance = new Queue();
