/* A basic list implementation */
var List = function() {
  this.pos = 0;
  this.dataStore = [];

  this.front = function() {
    this.pos = 0;
  };

  this.end = function() {
    this.pos = this.listSize - 1;
  };

  this.prev = function() {
    if (this.pos > 0) {
      --this.pos;
    }
  };

  this.next = function() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  };

  this.currPos = function() {
    return this.pos;
  };

  this.moveTo = function(position) {
    this.pos = position;
  };

  /**
   * Get element at the current position
   */
  this.getElement = function() {
    return this.dataStore[this.pos];
  };

};

/**
 * get size of the list
 */
List.prototype.listSize = function() {
  return this.dataStore.length;
};

/**
 * Return the content of the list
 */
List.prototype.toString = function() {
  return this.dataStore;
};

/**
 * Append an element to the list
 */
List.prototype.append = function(element) {
  this.dataStore.push(element);
};

/**
 * Find an element in the list
 */
List.prototype.find = function(element) {
  return this.dataStore.indexOf(element);
};

/**
 * Remove an element from the list
 */
List.prototype.remove = function(element) {
  var position = this.find(element);
  if (position > -1) {
    this.dataStore.splice(position, 1);
    return true;
  }
  return false;
};

/**
 * Insert an element in the list
 */
List.prototype.insert = function(element, after) {
  var insertPos = this.find(after);
  if (insert > -1) {
    this.dataStore.splice(insertPos + 1, 0, element);
    return true;
  }
  return false;
};

/**
 * Clear the list
 */
List.prototype.clear = function() {
  delete this.dataStore;
  this.dataStore = [];
  this.pos = 0;
};

/**
 * check if a list contains an element
 */
List.prototype.contains = function(element) {
  if (this.dataStore.indexOf(element) > -1) {
    return true;
  }
  return false;
};
