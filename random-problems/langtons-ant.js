const gridState = (W, H, x, y, initialDirection, turns) => {
  
  const grid = Array.apply(null, Array(H));
  
  for(let i=0; i<H; i++) {
    grid[i] = Array.apply(null, Array(W)).fill('.');
  }
  
  const pos = {x, y};
  let direction = initialDirection;
  
  for(let i=0; i<turns; i++) {
    
    const currX = pos.x;
    const currY = pos.y;
    const isWhite = grid[currY][currX] === '.';
    
    if (direction === 'N' || direction === 'S') {
      
      direction = isWhite ? 'W' : 'E'; // change direction
      pos.x = isWhite ? pos.x - 1 : pos.x + 1; // move one step
    
    } else if (direction === 'W' || direction === 'E') {
      
      direction = isWhite ? 'S' : 'N'; // change direction
      pos.y = isWhite ? pos.y - 1 : pos.y + 1; // move one step
      
    }
    
    grid[currY][currX] = isWhite ? '#' : '.'; // invert color of current tile
     
  }
  
  return grid;
};