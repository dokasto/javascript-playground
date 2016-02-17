/**
 * Sorting Algorithms
 */

var CArray = function(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  for (var i = 0; i < numElements; i++) {
    this.dataStore[i] = i;
  }
};

CArray.prototype.setData = function() {
  for (var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
};

CArray.prototype.clear = function() {
  for (var i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
};

CArray.prototype.insert = function(element) {
  this.pos++;
  this.dataStore[this.pos] = element;
};

CArray.prototype.toString = function() {
  var retstr = '';
  for (var i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + ' ';
    if (i > 0 && i % 10 == 0) {
      retstr += '\n';
    }
  }
  return retstr;
};

CArray.prototype.swap = function(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
