/* Basis Set Implementation */
var Set = function() {
  this.dataStore = [];
};

/**
 * Add a new Unique memeber
 */
this.prototype.add = function(member) {
  if (this.dataStore.indexOf(member) == -1) {
    return false;
  } else {
    this.dataStore.push(memeber);
    return true;
  }
};

/**
 * Remove an element
 */
Set.prototype.remove = function(member) {
  var position = this.dataStore.indexOf(member);
  if (position == -1) {
    return false;
  } else {
    this.dataStore.splice(position, 1);
  }
};

/**
 * Get the size of the set
 */
Set.prototype.size = function() {
  return this.dataStore.length;
};

/**
 * Check if set contains an element
 */
Set.prototype.contains = function(element) {
  if (this.dataStore.indexOf(element) == -1) {
    return false;
  } else {
    return true;
  }
};

/**
 * Find the Union of the set
 */
Set.prototype.union = function(set) {
  var tempSet = new Set();
  this.dataStore.forEach(function(element) {
    tempSet.add(element);
  });

  set.dataStore.forEach(function(element) {
    if (!tempSet.contains(element)) {
      tempSet.add(element);
    }
  });
  return tempSet;
};

/**
 * Find the set intersect
 */
Set.prototype.intersect = function(set) {
  var tempSet = new Set();
  this.dataStore.forEach(function(element) {
    if (set.contains(element)) {
      tempSet.add(element);
    }
  });
};

/**
 * Check if a set is a subset of another set
 */
Set.prototype.subset = function(set) {
  if (this.size() > set.size()) {
    return false;
  } else {
    this.dataStore.forEach(function(element) {
      if (!set.contains(element)) {
        return false;
      }
    });
  }
  return true;
};

/**
 * returns a set that contains those members of
 * the first set that are not in the second set
 */
Set.prototype.difference = function(set) {
  var tempSet = new Set();
  this.dataStore.forEach(function(element) {
    if (!set.contains(element)) {
      tempSet.add(element);
    }
  });
  return tempSet;
};

/**
 * Display the elements in a set
 * @return {[type]} [description]
 */
Set.prototype.show = function() {
  return this.dataStore.join();
};
