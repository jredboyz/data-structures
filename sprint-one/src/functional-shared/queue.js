var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.numKeys = 0;
  someInstance.nextOut = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.numKeys++;
  this.storage[this.numKeys] = value;
};

queueMethods.dequeue = function () {
  if (this.size() > 0) {
    this.nextOut++;
    var dequeued = this.storage[this.nextOut];
    delete this.storage[this.nextOut];
    return dequeued;
  }
};

queueMethods.size = function () {
  return this.numKeys - this.nextOut;
};

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');

