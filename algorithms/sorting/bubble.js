/**
 * Bubble Sort
 */

 const BubbleSort = list => {
	 let isSorted = false;
	 while(!isSorted) {
		isSorted = true;
		 for(let i = 0; i < list.length - 1; i++) {
			let left = list[i];
			let right = list[i + 1];
			 if(left > right) {
				 list[i] = right;
				 list[i + 1] = left;
				 isSorted = false;
			 }
		 }
	 }
	 return list;
 };