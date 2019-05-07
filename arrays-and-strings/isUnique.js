// Implement an algorithm to determine if a string has all unique charachers.
// What if you cannot use additional data structures?

// Solution1:
// - Assumptions: ASCII chars
// - Data structure: Hash
//   - Pseudo algorithm:
//     - Iterate through array
//     - If current char is in hash, return false
//     - return true after iteration

// Time Complexity: O(n) // You can argue that is o(1) since the for loop  will never iterate through more than 128 chars
// Space Complexity: O(n)

const isUnique1 = stringParam => {
  if (stringParam.length > 128) return false;
  let stringHash = {};
  for (let character of stringParam) {
    if (stringHash[character] !== undefined) {
      return false;
    } else {
      stringHash[character] = 1;
    }
  }
  return true;
}

console.log('============ isUnique1 ==========');
console.log(isUnique1('')); // returns true
console.log(isUnique1('a')); //returns true
console.log(isUnique1('abdefghi')); //returns true
console.log(isUnique1('abfdefghi')); //returns false
console.log(isUnique1('aafdefghi')); //returns false
console.log('============ isUnique1 ==========');



// Solution 2
// -  Data structure: None
// - Pseudo algorithm
//    - Iterate through array with i
//    - Iterate through array from i+1 to the end
//    - If i equals j return false
//    - After loop return true
//
// - Time complexity o(n^2)
// - Space complexity o(1)
//

const isUnique2 = string => {
  if (string.length > 128) return false;
  for (let i = 0; i < string.length; i++) {
    for ( let j = i+1; j < string.length; j++ ) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log('============ isUnique2 ==========');
console.log(isUnique2('')); // returns true
console.log(isUnique2('a')); //returns true
console.log(isUnique2('abdefghi')); //returns true
console.log(isUnique2('abfdefghi')); //returns false
console.log(isUnique2('aafdefghi')); //returns false
console.log('============ isUnique2 ==========');
