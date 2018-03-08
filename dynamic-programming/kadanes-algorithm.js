/**
 * Given an array of integers (positive or negative) find the sub-array with the largest sum.
 */

const maxSubArrNaiveApproach = array => {
  const subs = new Map();
  for (let i=0; i<array.length; i++) {
    let sum = array[i];
    const collection = [array[i]];
    for(let j=i+1; j<array.length; j++) {
      sum += array[j];
      collection.push(array[j]);
      subs.set(sum, [].concat(collection));
    }
  }
  const max = Math.max.apply(null, Array.from(subs.keys()));
  return subs.get(max);
};

const maxSubArr = array => {
  let maxCurr = array[0];
  let maxGlobal = array[0];
  for(let i=1; i<array.length; i++) {
    maxCurr = Math.max(array[i], maxCurr + array[i]);
    maxGlobal = Math.max(maxCurr, maxGlobal);
  }
  return maxGlobal;
};