/**
 * JSON.stringify implementation
 * @param {*} primitive 
 */
const stringify = primitive => {

  if (typeof primitive === 'string') return `"${primitive}"`;

  if (typeof primitive === 'number') return primitive;

  if (primitive instanceof Array) {
    const result = primitive.map(stringify);
    
    return `[${result.join(',')}]`;
  }
  
  const keyValuePairs = [];
  
  for(let key in primitive) {
    const strKey = `"${key}"`;
    const val = stringify(primitive[key]);
    
    keyValuePairs.push(`${strKey}:${val}`);
  }
  
  return `{${keyValuePairs.join(',')}}`;
};
