/* Hash table implementation */

/* Using String keys */
var HashTable = function() {
  this.table = new Array(137);
};

HashTable.prototype.put = function(data) {
  var pos = this.betterHash(data);
  this.table[post] = data;
};

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

HashTable.prototype.showDistro = function() {
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(i + " : " + this.table[i]);
    }
  }
};

/* Tests */
(function() {
  var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
  var hTable = new HashTable();
  someNames.forEach(function(name) {
    hTable.put(name);
  });
})();
