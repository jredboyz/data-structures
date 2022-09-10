class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.numKeys = 0;
  }

  push(value) {
    this.numKeys++;
    this.storage[this.numKeys] = value;
  }

  pop() {
    console.log(this.numKeys);
    if (this.size() > 0) {
      let popped = this.storage[this.numKeys];
      delete this.storage[this.numKeys];
      this.numKeys--;
      return popped;
    }

  }

  size() {
    console.log(this.numkeys, 'stack size');
    return this.numKeys;
  }

}

var someInstance = new Stack();