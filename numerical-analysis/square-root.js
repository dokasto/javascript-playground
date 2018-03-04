/**
 * compute the square root of a number using Babylonian method
 */

const sqrt = S => {
	
  const epsilon = 0.001;
  
  const isGoodEnough = est => Math.abs(Math.pow(est, 2) - S) < epsilon;
  
  const improve = est => (est + (S/est)) / 2;
  
  const iter = n => isGoodEnough(n) ? n : iter(improve(n));
  
  return iter(S);
};
