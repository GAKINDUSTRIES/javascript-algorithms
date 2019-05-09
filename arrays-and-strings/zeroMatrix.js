// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
// a b c d b e
// d e f g 0 3
// d g e d s a
//
// Solution:
// Pseudocode:
//    Loop through the matrix
//    When finding a zero value, store, (row, column)
//    Iterate through the stored values
//      For a value, make entier row zero (iteration)
//      For a value, make entier column zero (iteration)
//    Time Complexity: O(MN)
//    Space Complexity: O(B) -> B max(M, N)
//
//

const nullifyColumn = (hash, matrix) => {
  for (key in hash) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][parseInt(key)] = 0;
    }
  }

  return matrix;
}

const nullifyRow = (hash, matrix) => {
  for (key in hash) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[parseInt(key)][i] = 0;
    }
  }

  return matrix;
}

const zeroMatrix = matrix => {
  let rowHash = {};
  let columnHash = {};
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        rowHash[row] = 1;
        columnHash[column] = 1;
      }
    }
  }
  matrix = nullifyRow(rowHash, matrix);
  return nullifyColumn(columnHash, matrix);
}

console.log(zeroMatrix([ [1, 2, 3, 4], [5, 0, 6, 7], [8, 9 , 10 , 0] ]));
