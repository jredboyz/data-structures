var Tree = function(value) {
  // declare the newTree obj
  var newTree = {};
  // create value key equal to input value
  newTree.value = value;
  // create children key with empty array as value
  newTree.children = [];

  // extend/add methods into Tree
  _.extend(newTree, treeMethods);

  // return newTree
  return newTree;
};

// Variable to hold all methods for Tree
var treeMethods = {};

treeMethods.addChild = function(value) {
  // delcare newChild and assign it to the Tree function with the value as input
  // this will create the key and value property in line 5
  var newchild = Tree(value);
  // push newChild to children
  this.children.push(newchild);
};

treeMethods.contains = function(target) {
  // declare isTrue as false
  var isTrue = false;
  // create inner recursion function
  var recurse = function(obj) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].value === target) {
        return isTrue = true;
      } else if (obj[i]['children'].length !== 0) {
        recurse(obj[i]['children']);
      }
    }
  };
  recurse(this.children);
  return isTrue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
