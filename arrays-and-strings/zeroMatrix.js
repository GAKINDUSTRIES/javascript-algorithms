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


// Solution2: Improve space complexity
// - Variation:
//   - Use first column and row to store the nulllified column/row
//   - Use two variables to save if first column, row need to be nullified
// - Time Complexity: O(MN)
// - Space Complexity: O(1)
//
//

const checkNullFirstColumn = matrix => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) return true;
  }
  return false;
};

const checkNullFirstRow = matrix => {
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) return true;
  }
  return false;
};

const nullifyRows = (matrix) => {
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][0] !== 0) continue;
    for (let i = 1; i < matrix[0].length; i++) {
      matrix[j][i] = 0;
    }
  }

  return matrix;
}

const nullifyColumns = (matrix) => {
  for (let column = 1; column < matrix[0].length; column++) {
    if (matrix[0][column] !== 0) continue;
    for (let i = 1; i < matrix.length; i++) {
      matrix[i][column] = 0;
    }
  }

  return matrix;
}

const zeroMatrix2 = matrix => {
  let nullifyFirstColumn = checkNullFirstColumn(matrix);
  let nullifyFirstRow = checkNullFirstRow(matrix);
  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        matrix[row][0] = 0;
        matrix[0][column] = 0;
      }
    }
  }
  matrix = nullifyColumns(nullifyRows(matrix));

  if (nullifyFirstRow) {
    for (let col = 0; col < matrix[0].length; col++)
      matrix[0][col] = 0;
  }

  if (nullifyFirstColumn)
    for (let row = 0; row < matrix.length; row++)
      matrix[row][0] = 0;
  return matrix
}

console.log(zeroMatrix2([ [1, 2, 3, 4], [5, 0, 6, 7], [8, 9 , 10 , 0] ]));
