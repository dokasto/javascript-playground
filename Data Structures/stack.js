/* Stack Implementation */
var Stack = function() {
  this.dataStore = [];
  this.top = 0;
};

/**
 * Add an element to the stack
 */
Stack.prototype.push = function(element) {
  this.dataStore[this.top++] = element;
  return true;
};

/**
 * Returns the top element in the stack
 * and remove it from the stack
 */
Stack.prototype.pop = function() {
  this.top--;
  var value = this.dataStore[this.top];
  this.dataStore.splice(this.top, 1); // delete this index
  return value;
};

/**
 * Only returns the first element in the stack
 */
Stack.prototype.peek = function() {
  return this.dataStore[this.top - 1];
};

/**
 * Returns the length of the stack
 */
Stack.prototype.length = function() {
  return this.top;
};

/**
 * Clear stack by setting top to 0
 */
Stack.prototype.clear = function() {
  delete this.dataStore;
  this.dataStore = [];
  this.top = 0;
};

/**
 * View the contents of the stack
 */
Stack.prototype.toString = function() {
  return this.dataStore.join();
};


/****** Exercises *********/

/**
 * This functions algorithm uses Stacks
 * for converting a number to any of the bases
 * 2 through 9 only.
 */
var MulBase = function(num, base) {
  var s = new Stack();
  var converted = "";
  do {
    var abs = num % base;
    s.push(abs);
    num = Math.floor(num / base);
  } while (num > 0);
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
};
