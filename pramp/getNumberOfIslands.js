// function getNumberOfIslands(binaryMatrix) {
//   const exploreIsland = (row, col) => {
//     binaryMatrix[row][col] = 2;
//     //check left
//     if (binaryMatrix[row][col - 1] === 1) exploreIsland(row, col - 1);
//     //check right
//     if (binaryMatrix[row][col + 1] === 1) exploreIsland(row, col + 1);
//     //check up
//     if (binaryMatrix[row - 1]) {
//       if (binaryMatrix[row - 1][col] === 1) exploreIsland(row - 1, col);  
//     }    
//     //check down
//     if (binaryMatrix[row + 1]) {
//       if (binaryMatrix[row + 1][col] === 1) exploreIsland(row + 1, col); 
//     }
//   }
  
//   let islandCounter = 0;
//   for (let i = 0; i < binaryMatrix.length; i += 1) {
//     for (let j = 0; j < binaryMatrix[0].length; j += 1) {
//       if (binaryMatrix[i][j] === 1) {
//         islandCounter += 1;
//         exploreIsland(i, j);
//       }
//     }
//   }
  
//   return islandCounter;
// }

// -------- alt solution -------- //
const exploreIsland = (binaryMatrix, row, col) => {
  if (
    row < 0 || 
    col < 0 || 
    row >= binaryMatrix.length || 
    col >= binaryMatrix[0].length ||
    binaryMatrix[row][col] !== 1
  ) return;

  binaryMatrix[row][col] = 2;
  exploreIsland(binaryMatrix, row + 1, col);
  exploreIsland(binaryMatrix, row + 1, col);
  exploreIsland(binaryMatrix, row, col + 1);
  exploreIsland(binaryMatrix, row, col - 1);
};

const getNumberOfIslands = (binaryMatrix) => {
  let islandCounter = 0;
  for (let i = 0; i < binaryMatrix.length; i += 1) {
    for (let j = 0; j < binaryMatrix[0].length; j += 1) {
      if (binaryMatrix[i][j] === 1) {
        islandCounter += 1;
        exploreIsland(binaryMatrix, i, j);
      }
    }
  }
  return islandCounter;
};

const binaryMatrix = [ 
  [0,    1,    0,    1,    0],
  [0,    0,    1,    1,    1],
  [1,    0,    0,    1,    0],
  [0,    1,    1,    0,    0],
  [1,    0,    1,    0,    1]
];


console.log(getNumberOfIslands(binaryMatrix));
