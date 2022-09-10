var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let currentNode = Node(value);
    list.tail = currentNode;

  };

  list.removeHead = function() {
    var returnedHead = head
    list.head = 
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
linkedList.addToTail(4);
expect(linkedList.tail.value).to.equal(4);
linkedList.addToTail(5);
expect(linkedList.tail.value).to.equal(5);
 * Complexity: What is the time complexity of the above functions?
 */

// linkedList = {value: 5, next: {value: 6, next: null}};