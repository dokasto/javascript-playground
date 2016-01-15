/**
 * Basic Linked List Implementation
 */
var LList = function() {

  /**
   * Internal Node Class
   */
  this.Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.head = new this.Node("head");
};

/**
 * Find an item
 * @param  {string} t
 * @return {Object}
 */
LList.prototype.find = function(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

/**
 * Insert a new item
 * @param  {newElement}
 * @param  {item}  [parent item or head]
 */
LList.prototype.insert = function() {
  var newElement = arguments[0];
  var item = arguments[1] || "head";
  var newNode = new this.Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
  return true;
};

/**
 * Find the previous node of an element
 * @param  {string} item
 * @return {object}
 */
LList.prototype.findPrevious = function(item) {
  var currNode = this.head;
  while (currNode.next != null && currNode.next.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

/**
 * [remove description]
 * @return {[type]} [description]
 */
LList.prototype.remove = function(item) {
  var prevNode = this.findPrevious(item);
  if (prevNode != null) {
    prevNode.next = prevNode.next.next;
    return true;
  }
  return false;
};

/**
 * Display contents
 */
LList.prototype.display = function() {
  var currNode = this.head;
  console.log("Display nodes");
  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};



/**
 * Double Linked List Implementation
 * Inherit from LList
 */
var DLList = function() {
  // extend LinkedLikst class
  LList.call(this);
};

/**
 * Create a DoubleLinkedList prototype that inherits
 * from linkedlist prototyp
 */
DLList.prototype = Object.create(LList.prototype);

/* set the constructor property to refer to double linked list */
DLList.prototype.constructor = DLList;

/**
 * Modify internal Node class
 */
DLList.prototype.node = function(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};


DLList.prototype.insert = function() {
  var newElement = arguments[0];
  var item = arguments[1] || "head";
  var newNode = new this.Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
  return true;
};

DLList.prototype.remove = function(item) {
  var currNode = this.find(item);
  if (currNode.next != null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
    return true;
  }
};

DLList.prototype.findLast = function() {
  var currNode = this.head;
  while (currNode.next != null) {
    currNode = currNode.next;
  }
  return currNode;
};

DLList.prototype.displayReverse = function() {
  var currNode = this.head;
  currNode = this.findLast();
  console.log("Display Nodes in reverse");
  while (currNode.previous != null) {
    console.log(currNode.element);
    currNode = currNode.previous;
  }
};

/**
 * TODO: To be continue
 * Move current node forrward
 * @param  {int} n [number of times to move]
 */
DLList.prototype.advance = function(n) {
  currNode = this.head;
  for (var i = 0; i < n; i++) {
    if (currNode.next != null) {
      var nextNode = currNode.next;
      console.log(nextNode);
      currNode.next = nextNode.next;
      console.log(currNode)
      currNode.previous = nextNode;
      console.log(currNode);
    }
  }
};

/**
 * Move current node backwords
 * @param  {int} n [number of times to move]
 */
DLList.prototype.back = function(n) {
  currNode = this.head;
  for (var i = 0; i < n; i++) {
    if (currNode.prev != null) {
      var nextNode = currNode.prev;
      currNode.prev = nextNode.prev;
      currNode.next = nextNode
    }
  }
};
