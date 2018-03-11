
const lcs = (a, b, aLen, bLen) => {
  let result;
  if (aLen === 0 || bLen === 0) {
    result = 0;
  } else if (a[aLen-1] === b[bLen -1]) {
    result = 1 + lcs(a, b, aLen - 1, bLen - 1);
  } else {
    const aLcs = lcs(a, b, aLen -1, bLen);
    const bLcs = lcs(a, b, aLen, bLen -1);
    result = Math.max(aLcs, bLcs);
  }
  return result;
};
