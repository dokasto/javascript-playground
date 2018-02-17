/**
 * Search for an element in a sorted array
 * using Binary Search
 * @param {*} array 
 * @param {*} element 
 */
const binarySearch = (array, element) => {
	if (array.length === 2) {
		return array[0] === element || array[1] === element;
	}

	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);

	if (mid >= element) {
		return binarySearch(left, element);
	} else if (mid < element) {
		return binarySearch(right, element);
	}
};

it('Binary search', () => {
	expect(binarySearch([1, 3, 8, 10], 8)).toEqual(true);
	expect(binarySearch([1, 3, 8, 10, 15], 9)).toEqual(false);
});
