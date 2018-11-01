const permute = array => {
  if (array.length < 2) return array;
  
  const result = [];

  for(let i=0; i<array.length; i++) {
    const prefix = array[i];
    const suffixArray = array.slice(0);
    suffixArray.splice(i, 1);

    const permOfSuffix = permute(suffixArray);

    for(let j=0; j<permOfSuffix.length; j++) {
      const newArrangement = [prefix].concat(permOfSuffix[j]);
      result.push(newArrangement);
    }
  }

  return result;
};