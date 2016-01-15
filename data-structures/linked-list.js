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
 * Find an element
 * @param  {string} elemen
 * @return {Object}
 */
LList.prototype.find = function(element) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
};

/**
 * Insert a new item
 * @param  {String} newElement
 * @param  {Object} item       [Item where newelement will be inserted after]
 */
LList.prototype.insert = function(newElement, item) {
  var newNode = new this.Node(newelement);
  var currNode = this.find(item);
  var newNode.next = currNode.next;
  currNode.next = newNode;
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
