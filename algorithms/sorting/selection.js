
/**
 * Selection sort
 */

const selectionSort = list => {
  let isSorted = false;
  let pointer = 0;
  while(!isSorted || pointer < list.length) {
    isSorted = true;
    const smallest = Math.min.apply(null, list.slice(pointer));
    const smallestIndex = list.indexOf(smallest);
    if (list[smallestIndex] !== list[pointer]) {
      [list[smallestIndex], list[pointer]] = [list[pointer], list[smallestIndex]];
      isSorted = false;
    }
    pointer++;
  }
  return list;
};