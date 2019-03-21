function getNumberOfIslands(binaryMatrix) {
  const exploreIsland = (row, col) => {
    binaryMatrix[row][col] = 2;
    //check left
    if (binaryMatrix[row][col - 1] === 1) exploreIsland(row, col - 1);
    //check right
    if (binaryMatrix[row][col + 1] === 1) exploreIsland(row, col + 1);
    //check up
    if (binaryMatrix[row - 1]) {
      if (binaryMatrix[row - 1][col] === 1) exploreIsland(row - 1, col);  
    }    
    //check down
    if (binaryMatrix[row + 1]) {
      if (binaryMatrix[row + 1][col] === 1) exploreIsland(row + 1, col); 
    }
  }
  
  let islandCounter = 0;
  for (let i = 0; i < binaryMatrix.length; i += 1) {
    for (let j = 0; j < binaryMatrix[0].length; j += 1) {
      if (binaryMatrix[i][j] === 1) {
        islandCounter += 1;
        exploreIsland(i, j);
      }
    }
  }
  
  return islandCounter;
}
