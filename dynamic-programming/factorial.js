/**
 * compute the factorial of a number
 */

 const factorial = n => n < 2 ? n : n * factorial(n - 1);

 const optimizedFactorial = n => {
	 const cache = {};
	 if (n < 2) return n;
	 if (cache[n]) return cache[n];
	 cache[n] = n * optimizedFactorial(n - 1);
	 return cache[n];
 };