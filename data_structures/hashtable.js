/* Hash table implementation */

/* Using String keys */
var HashTable = function() {
  this.table = new Array(137);
};

/**
 * Store data in hash table
 */
HashTable.prototype.put = function(data) {
  var position = this.betterHash(data);
  this.table[position] = data;
};

/**
 * Store data in hastable using Seperate chaining
 * to handle collision
 */
HashTable.prototype.putSeperate = function(data) {
  var position = this.betterHash(data);
  // if data is already stored add to it
  this.table[position] instanceof Array ? this.table[position].push(data) : this.table[position] = [data];
};

/**
 * Show contants of hash table when
 * collision handling methods are used
 */
HashTable.prototype.showCollisions = function() {
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined && this.table[i].length > 0) {
      console.log(i + " : " + this.table[i].join());
    }
  }
};

/**
 * Store data in hastable using Linear probing
 * to handle collision
 * @return {[type]} [description]
 */
HashTable.prototype.putLinear = function(data) {
  var position = this.betterHash(data);
  var index = 0;
  var foundEmpty = false;
  if (this.table[position].length == 0) {
    this.table[position].push(data);
  } else {
    while (!foundEmpty) {
      if (this.table[index].length == 0) {
        this.table[index].push(data);
        foundEmpty = true;
      } else {
        index++;
      }
    }
  }
};

/**
 * Get data
 */
HashTable.prototype.get = function(key) {
  return this.table[this.betterHash(key)];
};

/**
 * Hash element
 */
HashTable.prototype.betterHash = function(string) {
  var H = 137;
  var total = 0;
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
};

/**
 * Display hastable contents
 */
HashTable.prototype.showDistro = function() {
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(i + " : " + this.table[i]);
    }
  }
};

/**
 * Build chains for collision handling
 */
HashTable.prototype.buildChains = function() {
  for (var i = 0; i < this.table.length; i++) {
    this.table[i] = [];
  }
};

/* Tests */
(function() {
  var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Jennifer", "Cynthia", "Mike", "Clayton", "Cynthia", "Danny", "Jonathan"];
  var hTable = new HashTable();
  hTable.buildChains();
  someNames.forEach(function(name, i) {
    hTable.putLinear(name);
  });
  hTable.showCollisions();
});
