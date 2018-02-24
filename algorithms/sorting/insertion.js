const array = [1, 6, 8, 2, 5];

const insertionSort = list => {
  let position = 1;
  let sorted;
  let unsorted;
  let current;
  
  while(position < list.length) {
    sorted = list.slice(0, position);
    unsorted = list.slice(position);
    current = unsorted[0];
    sorted.forEach((item, i) => {
      if (current < item) {
        list.splice(list.indexOf(current), 1);
        list.splice(i - 1, 0, current);
      }
    });
    position++;
  }
  return list;
};
