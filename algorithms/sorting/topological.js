/**
 * Topological sort
 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  
  const graph = {};
  const visiting = new Set();
  const visited = new Set();
  
  for(let course = 0; course < numCourses; course++) {
    graph[course] = [];
  }
  
  // build graph
  prerequisites.forEach((edge) => {
    const course = edge[0];
    const requirement = edge[1];
    
    if(graph[course]) {
      graph[course].push(requirement);
    } else {
      graph[course] = [requirement];
    }
  });
  
  const depthFirstSearch = course => {
    
    if(!visited.has(course)) {
    
      if (visiting.has(course)) return true;
      visiting.add(course);

      let requirements = graph[course] || [];
      for(let i = 0; i < requirements.length; i++) {
        const requirment = requirements[i];
        const isCyclic = depthFirstSearch(requirment);
        if (isCyclic) return true; 
      }

      visiting.delete(course);
      visited.add(Number(course));
    }
    
  };
  
  for(let key in graph){
    let isCyclic = depthFirstSearch(key);
    if (isCyclic) return [];
  }
  
  return Array.from(visited);
};