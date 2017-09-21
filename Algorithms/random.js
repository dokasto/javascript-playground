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
}

/**
 * Factorial
 * @param {int} n 
 */
const factorial = n => (n < 2 ? 1 : n * factorial(n - 1));

const isPrime = n => {
	let multiples = 0;
	for (let i = 0; i <= n; i++) {
		if (n % i === 0) multiples++;
	}
	return multiples === 2;
};

const fib = n => {
	if (n <= 0) return 0;
	if (n === 1) return 1;
	return fib(n - 1) + fib(n - 2);
};

const isSorted = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) return false;
	}
	return true;
};

const filter = () => {};

describe('Random algorithms', function() {
	it(`3 is a prime number`, function() {
		expect(isPrime(3)).toEqual(true);
	});

	it('5 Factorial is 120', () => {
		expect(factorial(5)).toEqual(120);
	});

	it('Fibonacci of 10 is 55', () => {
		expect(fib(10)).toEqual(55);
	});

	it('Array is sorted', () => {
		expect(isSorted([3, 9, -3, 10])).toEqual(false);
		expect(isSorted([[-5, 0, 3, 9]])).toEqual(true);
	});
});
