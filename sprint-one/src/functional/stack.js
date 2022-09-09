var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numkeys = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numkeys++] = value;
    Object.assign(someInstance, storage);
  };

  someInstance.pop = function() {
    delete storage.numkeys;
    if (numkeys > 0) {
      numkeys--;
    }
    return someInstance[numkeys];
  };

  someInstance.size = function() {
    return numkeys;
  };
  return someInstance;
};
