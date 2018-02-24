const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];


const quickSort = arr => {
  if (arr.length < 2) return arr;
  
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      lesser.push(arr[i]);
    } else if (arr[i] > pivot) {
      greater.push(arr[i]);
    }
  }
  
  return quickSort(lesser).concat(pivot, quickSort(greater));
};

console.log(quickSort(array));