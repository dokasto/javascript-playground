/**
 * Implementation of triple sum problem
 * Find three numbers in an array such that their
 * sum is equal to a value
 */

/**
 * TrimpeSum
 * @param  {int} sum
 * @param  {array} numbers
 * @return {array}
 */
function tripleSum(sum, numbers) {
  for (var i = 0; i <= numbers.length; i++) {
    for (var j = i; j <= numbers.length; j++) {
      for (var k = j; k <= numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === sum) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }
};
