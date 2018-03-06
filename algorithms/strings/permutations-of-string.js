const permute = string => {
  if (string.length < 2) return string;
  
  const permutations = new Set();
  
  for(let i = 0; i < string.length; i++) {
    
    const char = string[i];
    const remaining = `${string.slice(0,i)}${string.slice(i+1, string.length)}`;
    
    for(let substring of permute(remaining)) {
      permutations.add(`${char}${substring}`);
    }
  }  
  return Array.from(permutations);
};
