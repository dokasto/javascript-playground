const subsets = array => {
  const subset = [];
  helper(array, subset, 0);
  
  function helper(givenArr, subset, index) {
    if(index === givenArr.length) {
      console.log(subset);
    } else {
      subset[index] = null;
      helper(givenArr, subset, index + 1);
      subset[index] = givenArr[index];
      helper(givenArr, subset, index + 1);
    }
  }
};