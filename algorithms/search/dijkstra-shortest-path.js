/**
 * Dijkstara's graph search Algorithm
 */

 /**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = (times, N, K) => {
    
  const graph = {};
  const distanceWeightMap = new Map();
  const parentMap = new Map();
  const shortestPathMap = new Map();
  
  for(let i = 1; i <= N; i++) {
    let weight = i === K ? 0 : Number.POSITIVE_INFINITY;
    graph[i] = [];
    distanceWeightMap.set(i, weight);
    shortestPathMap.set(i, Number.POSITIVE_INFINITY);
    parentMap.set(i, null);
  }
  
  times.forEach((time) => {
    const [source, target, weight] = time;
    if(graph[source]) graph[source].push({ target, weight });
  });
  
  const extractMin = () => {
    const minVal = Math.min.apply(this, Array.from(distanceWeightMap.values()));
    let edge = null;
    distanceWeightMap.forEach((val, key) => {
      if (edge === null) edge = key;
      if (minVal === val) {
        edge = key;
      }
    });
    
    const adjacents = graph[edge];
    const edgeWeight = distanceWeightMap.get(edge);
    distanceWeightMap.delete(edge);
    return {edge, edgeWeight, adjacents};
  };
  
  while(distanceWeightMap.size > 0) {
    
    const current = extractMin();
    
    if (current) {
      
      const {edge, edgeWeight, adjacents} = current;
      
      if (shortestPathMap.get(edge) > edgeWeight) {
        shortestPathMap.set(edge, edgeWeight);
      }
      
      adjacents.forEach((adj) => {
        const {target, weight} = adj;
        let newWeight = edgeWeight + weight;
        
        if (shortestPathMap.get(target) > newWeight) {
          shortestPathMap.set(target, newWeight);
          distanceWeightMap.set(target, newWeight);
          parentMap.set(target, edge); // update parent
        }
        
      });
       
    }
  }
  
  const result = Math.max.apply(null, Array.from(shortestPathMap.values()));
  
  if (result < Number.POSITIVE_INFINITY) return result;
  return -1;
};