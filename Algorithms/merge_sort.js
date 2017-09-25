/**
 * Implementation of merge sort
 */

const sort = arr => {
	if (arr.length < 2) {
		return arr;
	}

	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);

	return merge(sort(left), sort(right));
};

const merge = (left, right) => {
	let result = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < left.length && indexRight < right.length) {
		result.push(left[indexLeft] < right[indexRight] ? left[indexLeft++] : right[indexRight++]);
	}

	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};
