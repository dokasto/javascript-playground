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
  while (currNode.next != null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
};
