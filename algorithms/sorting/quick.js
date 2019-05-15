const quickSort = list => {
  if (list.length < 2) return list;
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


I B C A K A
D R F C E A
G H O E A D

going down


