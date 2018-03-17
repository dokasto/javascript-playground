/**
 * Bubble Sort
 */

const bubbleSort = list => {
  let isSorted = false;
  while(!isSorted) {
    isSorted = true;
    for(let i=0; i<list.length - 1; i++) {
      if(list[i] > list[i + 1]) {
        [list[i + 1], list[i]] = [list[i], list[i + 1]];
        isSorted = false;
      }
    }
  }
  return list;
};