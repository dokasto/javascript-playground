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

const filter = (arr, fn) => {
	let result = [];
	arr.forEach(each => {
		if (fn(each)) result.push(each);
	});
	return result;
};

const reduce = (arr, fn, initial) => {
	let accumulator = initial;
	arr.forEach((each, i) => {
		accumulator = fn(accumulator, each);
	});
	return accumulator;
};

const reverse = str =>
	str
		.split('')
		.reverse()
		.join('');

const indexOf = (array, element) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === element) return i;
	}
	return -1;
};

const isAPalindrome = str => str === reverse(str);

const missing = arr => {
	let n = arr.sort()[arr.length - 1];
	let total = n * (n + 1) / 2;
	let sum = arr.reduce((a, b) => a + b, 0);
	return total - sum;
};

const isBalanced = str => {
	if (str.charAt(0) === '}') return false;

	let opened = 0;
	let closed = 0;

	for (let char of str) {
		if (char === '{') opened++;
		if (char === '}') closed++;
	}

	return opened === closed;
};

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

	it('Filter array', () => {
		expect(filter([1, 2, 3, 4], n => n < 3)).toEqual([1, 2]);
	});

	it('Reduce arrays', () => {
		expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toEqual(10);
	});

	it('Reverse string', () => {
		expect(reverse('abcdef')).toEqual('fedcba');
	});

	it('Find index of element in number', () => {
		expect(indexOf([1, 2, 3], 1)).toEqual(0);
	});

	it('Check if string is Palindrome', () => {
		expect(isAPalindrome('abcdcba')).toEqual(true);
	});

	it('Missing number in [5, 1, 4, 2] shouild be 3', () => {
		expect(missing([5, 1, 4, 2])).toEqual(3);
	});

	it('Check if brackets are balanced', () => {
		expect(isBalanced('foo { bar { baz } boo }')).toEqual(true);
		expect(isBalanced('foo { bar { baz }')).toEqual(false);
	});
});
