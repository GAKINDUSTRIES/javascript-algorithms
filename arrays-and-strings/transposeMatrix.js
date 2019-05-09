// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to find the traspouse matrix. Can you do this in place?
//
// a b c
// d e f -> [ [a,b,c]  [d, e, f] [g, h, i] ] ==>  [ [a, d, g] [b, e, h] [c, f, i]  ]
// g h i
//
//
// - Solution:
// - Pseudcode:
//    Loop throgh rows i
//      if (i + 1 <= matrix.length)
//        iterate from i + 1 to matrix.length j
//          - change matrix [i + 1][j] with matrix[j][i + 1]
//    return matrix
// - Time complexity: O(n^2)
// - Space complexity: O(1)

const rotateMatrix = matrix => {
  let tmp = '';
  for (let i = 0; i < matrix.length; i++) {
    if ((i+1) <= matrix.length) {
      for (let j = i+1; j < matrix.length; j++) {
        tmp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = tmp;
      }
    }
  }

  return matrix
}

console.log(rotateMatrix([ ['a','b','c'],  ['d', 'e', 'f'], ['g', 'h', 'i'] ]));
console.log(rotateMatrix([ ['a','b','c', '1'],  ['d', 'e', 'f', '2'], ['g', 'h', 'i', '3'], ['5', '6', '7', '8'] ]));
console.log(rotateMatrix([['a', 'b'],['c', 'd']]));
