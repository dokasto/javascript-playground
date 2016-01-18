/* Dictionary Implementation */
var Dictionary = function() {
  this.dataStore = [];
};

Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
  return true;
};

Dictionary.prototype.find = function(key) {
  return this.dataStore[key];
};

Dictionary.prototype.remove = function(key) {
  delete this.dataStore[key];
  return true;
};

Dictionary.prototype.count = function() {
  return this.dataStore.length;
};

Dictionary.prototype.clear = function() {
  this.dataStore = [];
  return true;
};
