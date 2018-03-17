const insertionSort = list => {
  for(let i=0; i<list.length; i++) {
    const pointer = list[i];
    let prev = i - 1;
    while(prev >=0 && list[prev] > pointer) {
      list[prev + 1] = list[prev];
      prev--;
    }
    list[prev + 1] = pointer;
  }
  return list;
};

console.log(insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
