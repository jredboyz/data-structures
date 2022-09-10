var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numKeys = 0;
};

Stack.prototype.push = function (value) {
  this.numKeys++;
  this.storage[this.numKeys] = value;
};

Stack.prototype.pop = function () {
  console.log(this.numKeys);
  if (this.size() > 0) {
    let popped = this.storage[this.numKeys];
    delete this.storage[this.numKeys];
    this.numKeys--;
    return popped;
  }

};

Stack.prototype.size = function () {
  console.log(this.numkeys, 'stack size');
  return this.numKeys;
};

var someInstance = new Stack();


