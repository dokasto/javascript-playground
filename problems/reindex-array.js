/*
Given an input array and another array that describes a new  index for each element, mutate the input array so that each element ends up in their new index. Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops.
*/

const reIndex = (inputArray, indexArray) => {
  
  const isInCorrectPos = index => index === indexArray[index];
  
  const visited = new Set();
  
  for (let i=0; i<inputArray.length; i++) {
    
    const item = inputArray[i];
    
    if (!isInCorrectPos(i) && !visited.has(item)) {
      
      visited.add(item);

      const correctIndex = indexArray[i];
      const itemToBeSwapped = inputArray[correctIndex];
      
      inputArray[i] = itemToBeSwapped;
      inputArray[correctIndex] = item;
       
    }
  }
  
  return inputArray;
};