
const sort = list => {
	if (list.length < 2) return list;
	const mid = Math.floor(list.length / 2);
	const left = list.slice(0, mid);
	const right = list.slice(mid);
	return merge(sort(left), sort(right));
};

const merge = (leftArr, rightArr) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while(leftIndex < leftArr.length && rightIndex < rightArr.length ) {
		result.push(leftArr[leftIndex] < rightArr[rightIndex] ? leftArr[leftIndex++] : rightArr[rightIndex++]);
	}

	return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

console.log(sort([3,1000,7,223,1, 99]));