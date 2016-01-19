/* Dictionary Implementation */
var Dictionary = function() {
  this.dataStore = {};
};

Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
  return true;
};

Dictionary.prototype.find = function(key) {
  if (this.dataStore[key]) {
    return this.dataStore[key];
  } else {
    return 0;
  }
};

Dictionary.prototype.remove = function(key) {
  delete this.dataStore[key];
  return true;
};

Dictionary.prototype.count = function() {
  return this.dataStore.length;
};

Dictionary.prototype.clear = function() {
  this.dataStore = {};
  return true;
};

Dictionary.prototype.display = function() {
  console.log("Display dictionary");
  for (var key in this.dataStore) {
    if (this.dataStore.hasOwnProperty(key)) {
      console.log(key + " : " + this.dataStore[key]);
    }
  }
};

/* Exercise */
(function() {
  var sentence = "the brown fox jumped over the blue fox";
  var words = sentence.split(" ");
  var dict = new Dictionary();
  words.forEach(function(word) {
    var count = dict.find(word);
    if (count == 0) {
      dict.add(word, 1);
    } else {
      dict.remove(word);
      count++;
      dict.add(word, count);
    }
  });
  dict.display();
});
