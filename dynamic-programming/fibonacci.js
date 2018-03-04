/**
 * Comput the nth fibonacci number
 */

 const fib = n => n < 2 ? n : fib(n-1) + fib(n-2);

 // optimized fibonacci
const optimizedFib = n => {
	const cache = {};
	if (n < 2) return n;
	if (cache[n]) return cache[n];
	cache[n] = fib(n-1) + fib(n-2);
	return cache[n];
};