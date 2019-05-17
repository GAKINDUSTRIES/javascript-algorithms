// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3
//
//
// Solution:
//
// Psuedocode:
//  - Iterate through matrix
//      if find and island in position i
//        increase island count
//        checkIsland(i)
//
//  checkIsland will make 0 in postion i and call the function recursively to their neighbors positions
//
//  Time complexity:
//  Time complexity:
// [/]


const validateIsland = (matrix, row, column) => {


  if (row >= matrix.length || row < 0  || column >= matrix[0].length || column < 0) return;

  if (matrix[row][column] == 1) {

    matrix[row][column] = 0;
    validateIsland(matrix, row + 1, column);
    validateIsland(matrix, row - 1, column);
    validateIsland(matrix, row, column + 1);
    validateIsland(matrix, row, column - 1);
  }
}

const numberOfIslands = (matrix) => {
  let rowSize = matrix.length;
  let columnSize = matrix[0].length;
  let totalIslands = 0;

  for (let row = 0; row < rowSize; row++) {
    for (let column = 0; column < columnSize; column++) {

      if (matrix[row][column] == 1) {
        totalIslands++;

        validateIsland(matrix, row, column);
      }
    }
  }

  return totalIslands;
}

const matrix = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]
const matrix2 = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]

console.log(numberOfIslands(matrix));
console.log(numberOfIslands(matrix2));
