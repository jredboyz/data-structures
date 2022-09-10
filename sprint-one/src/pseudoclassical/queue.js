var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numKeys = 0;
  this.nextOut = 0;
};

Queue.prototype.enqueue = function (value) {
  this.numKeys++;
  this.storage[this.numKeys] = value;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    this.nextOut++;
    var dequeued = this.storage[this.nextOut];
    delete this.storage[this.nextOut];
    return dequeued;
  }
};

Queue.prototype.size = function () {
  return this.numKeys - this.nextOut;
};

var someInstance = new Queue();
