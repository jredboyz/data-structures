var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.numKeys = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.numKeys++;
  this.storage[this.numKeys] = value;
  // this.numKeys++;
};

stackMethods.pop = function () {
  console.log(this.numKeys);
  if (this.size() > 0) {
    let popped = this.storage[this.numKeys];
    delete this.storage[this.numKeys];
    this.numKeys--;
    return popped;
  }

};

stackMethods.size = function () {
  return this.numKeys;
};
