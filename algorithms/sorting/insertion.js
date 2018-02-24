const array = [1, 6, 8, 2, 5];


const insertionSort = arr => {
 for (let i = 0; i < arr.length; i++) {
   let temp = arr[i];
   let j= i - 1;
   while(j >= 0 && arr[j] > temp) {
     arr[j + 1] = arr[j];
     j--;
   }
   arr[j + 1] = temp;
 }
  return arr;
};

console.log(insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
