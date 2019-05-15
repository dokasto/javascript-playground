/**
 * Given a grid of characters output a decoded message.
 * The message for the following would be IROCKA.
 * (diagonally down right and diagonally up right if you can't go further .. you continue doing this)
 */
const letters = [
  ['I', 'B', 'C,', 'A', 'K', 'A'],
  ['D', 'R', 'F,', 'C', 'E', 'A'],
  ['G', 'H', 'O,', 'E', 'K', 'D'],
  ['G', 'H', 'O,', 'C', 'A', 'D']
];

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
const printer = grid => {
  const result = [];
  let pointerHead = 0;
  let pointDown = true;
  
  for(let i=0; i<grid[0].length; i++) {
    const current = grid[pointerHead][i];
    
    result.push(current);
    
    if (pointDown && !grid[pointerHead + 1]) {
      pointDown = false;
      pointerHead = grid.length - 1;
    }
    
    if (!pointDown && !grid[pointerHead - 1]) {
      pointDown = true;
      pointerHead = 0;
    }
    
    if (pointDown) {
      pointerHead++;
    } else {
      pointerHead--;
    }
    
	}
	
  return result;
};