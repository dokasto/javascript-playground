/**
 * Queue Implementation
 */
var Queue = function() {
  this.dataStore = [];
};

/**
 * Add an element to the end of the queue
 */
Queue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
  return true;
};

/**
 * Remove an element from the front of the queue
 */
Queue.prototype.dequeue = function() {
  return this.dataStore.shift();
};


Queue.prototype.front = function() {
  return this.dataStore[0];
};

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.toString = function() {
  var result = "";
  this.dataStore.forEach(function(item) {
    result += item + "\n";
  });
  return result;
};

Queue.prototype.empty = function() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
};
