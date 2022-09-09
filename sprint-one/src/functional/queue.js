var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numkeys = 0;
  var nextOut = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[numkeys++] = value;
    // Object.assign(someInstance, storage);
  };

  someInstance.dequeue = function() {

    var saved = storage[nextOut];
    console.log(saved);
    delete storage[nextOut];
    if (someInstance.size()) {
      nextOut++;
    }
    return saved;
  };

  someInstance.size = function() {
    return numkeys - nextOut;
  };

  return someInstance;
};
