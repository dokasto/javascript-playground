
/**
 * Selection sort
 */

 // In place
 const selectionSort = collection => {
	 let isSorted = false;
	 let position = 0;
	 let unsorted;
	 let biggestItem;
	 let positionOfBigItem;
	 let lastItem;
	 while(!isSorted) {
		isSorted = true;
		unsorted = collection.slice(0, collection.length - position);
		biggestItem = Math.max.apply(this, unsorted);
		positionOfBigItem = collection.indexOf(biggestItem);
		 if(positionOfBigItem !== collection.indexOf(collection.length - 1 - position)) {
			lastItem = collection[collection.length - 1 - position];
			 collection[collection.length - 1 - position] = biggestItem;
			 collection[positionOfBigItem] = lastItem;
			 isSorted = false;
			 position++;
		 }
	 }
	 return collection;
 };
