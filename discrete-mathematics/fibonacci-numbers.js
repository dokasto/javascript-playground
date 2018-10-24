
const fibonacciNaive = n => {
	if (n <=2) return n;
	return fibonacciNaive(n-1) + fibonacciNaive(n-2);
};

const fibonacciOptimal = n => {
	const cache = {};
	if (n <= 2) return n;
	if (cache[n]) {
		return cache[n];
	} else {
		cache[n] = fibonacciNaive(n-1) + fibonacciNaive(n-2);
		return cache[n];
	}
};