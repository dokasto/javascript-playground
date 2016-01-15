/**
 * Queue Implementation
 */
var Queue = function() {
  this.dataStore = [];
};

Queue.prototype.length = function() {
  return this.dataStore.length;
};

/**
 * Add an element to the end of the queue
 */
Queue.prototype.enqueue = function(element) {
  this.dataStore.push(element);
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
    result += item;
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

/**
 * Add an element to the front of the queue
 */
Queue.prototype.pushToFront = function(element) {
  this.dataStore.splice(0, 0, element);
};

/**
 * Removes an element from the back of the
 * queue
 */
Queue.prototype.popFromBack = function() {
  this.dataStore.pop();
};

/**
 * RadixSort Class
 * @param {Array} nums   an array of numbers
 * @param {Array} queues an array of Queue objects
 */
var RadixSort = function(nums, queues) {
  this.nums = nums;
  this.queues = queues;
};

/**
 * Distribute numbers according by the place (1s, 10s)
 * @param  {Array} nums  [array of numbers]
 * @param  {Array} queues [array of queues]
 * @param  {int} n      [description]
 * @param  {int} digit  [represents it's 1s or 10s place]
 * @return {null}
 */
RadixSort.prototype.distribute = function(n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit == 1) {
      this.queues[this.nums[i] % 10].enqueue(this.nums[i]);
    } else if (digit == 10) {
      this.queues[Math.floor(this.nums[i] / 10)].enqueue(this.nums[i]);
    }
  }
};

/**
 * Collect all sorted numbers
 * @param  {Array} queues
 * @param  {Array} nums
 * @return {null}
 */
RadixSort.prototype.collect = function() {
  var i = 0;
  for (var digit = 0; digit < 10; digit++) {
    while (!this.queues[digit].empty()) {
      this.nums[i] = this.queues[digit].dequeue();
      i++;
    }
  }
};

RadixSort.prototype.display = function() {
  console.log(this.nums.join());
};

/**
 * Test Radix sort
 */
(function() {
  var queues = [];
  for (var i = 0; i < 10; i++) {
    queues[i] = new Queue();
  }
  var nums = [45, 72, 93, 51, 21, 16, 70, 41, 27, 31];

  var radix = new RadixSort(nums, queues);
  console.log("Before radix sort: ");
  radix.display();
  radix.distribute(10, 10);
  radix.collect();
  console.log("\n\nAfter radix sort: ");
  radix.display();
});

/**
 * Test if word is a palindrome
 */
var isPalindrome = function(word) {
  var strArr = word.split("");
  var q = new Queue();
  var reverse = "";
  strArr.forEach(function(character) {
    q.pushToFront(character);
  });
  if (word.toLowerCase() == q.toString().toLowerCase()) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is NOT a palindrome");
  }
};

var words = ["ada", "jaded", "Rotavator", "christus"];
words.forEach(function(word) {
  //isPalindrome(word);
});
