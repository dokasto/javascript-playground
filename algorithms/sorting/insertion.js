/**
 * Insertion sort
 */

 const insertion = list => {
	let position = 1;
	let isSorted = false;
	let current;
	let unsorted;
	let swapped;
	while(!isSorted) {
		console.log(`Step --  ${position}`);
		isSorted = true;
		current = list[position];
		unsorted = list.slice(0, position);
		console.log('list before', list);
		console.log('current', current);
		console.log('unsorted', unsorted);
		swapped = false;
		unsorted.forEach((item, itemIndex) => {
			if(current < item && !swapped) {
				let positionOfCurrent = list.indexOf(current);
				let positionOfBigger = list.indexOf(item);
				// swap
				list[positionOfBigger] = current;
				list[positionOfCurrent] = item;
				isSorted = false;
				swapped = true;
			}
		});
		if(position === list.length - 1) {
			position = 1;
		} else {
			position++;
		}
	}
	return list;
 };


 console.log(insertion([10,4,445,9,3,222,6]));