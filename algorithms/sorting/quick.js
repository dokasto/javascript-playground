const quickSort = list => {
  
  const pivot = list[0];
  const lesser = [];
  const greater = [];
  
  for(let i=0; i<list.length; i++) {
    if(list[i] > pivot) {
      greater.push(list[i]);
    }
    if(list[i] < pivot) {
      lesser.push(list[i]);
    }
  }
  
  return quickSort(lesser).concat(pivot, quickSort(greater));
};
