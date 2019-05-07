// Given two strings, write a method to decide if one is a permutation of the other.
//
// - Solution1
// - Data structure: Hash
// - Pseudo code:
//    - Return false if length(s1) != length(s2)
//    - Create a hash h1 with key the character and value, the amount of times repeated for a string
//    - Create a hash h2 with key the character and value, the amount of times repeated for a string
//    - if h1 == h2, return true, else return false
// - Time Complexity: O(n), where n = max(length(s1), length(s2))
// - Space Complexity: O(n), where n = max(length(s1), length(s2))
//

const checkPermutation1 = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  hash1 = {};
  for (const i of string1) {
    (hash1[i] === undefined) ? hash1[i] = 1 : hash1[i]++;
  }

  hash2 = {};
  for (const i of string2) {
    (hash2[i] === undefined) ? hash2[i] = 1 : hash2[i]++;
  }

  if (Object.keys(hash1).length !== Object.keys(hash2).length) return false;
  for (const index in hash1) {
    if (hash1[index] !== hash2[index]) {
      return false;
    }
  }
  return true;
}

console.log('=========== checkPermutation1 ============');
console.log(checkPermutation1('', '')); //returns true
console.log(checkPermutation1(' ', ' ')); //returns true
console.log(checkPermutation1('abc', 'cba')); //returns true
console.log(checkPermutation1('a', 'abc')); //returns false
console.log(checkPermutation1('abc', 'cbag')); //returns false
console.log('=========== checkPermutation1 ============');


// - Solution2
// - Data structure: None
// - Pseudo code:
//    - Sort string1
//    - Sort string2
//    - Compare string1 to string2
// - Time complexity: O(n) -> n = max(length(string1, string2))
// - Space complexity: O(1)
//

const sortString = (str) => {
  return str.split('').sort().join('');
};

const checkPermutation2 = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  str1 = sortString(string1);
  str2 = sortString(string2);
  return str1 == str2;
}

console.log('=========== checkPermutation2 ============');
console.log(checkPermutation2('', '')); //returns true
console.log(checkPermutation2(' ', ' ')); //returns true
console.log(checkPermutation2('abc', 'cba')); //returns true
console.log(checkPermutation2('a', 'abc')); //returns false
console.log(checkPermutation2('abc', 'cbag')); //returns false
console.log('=========== checkPermutation2 ============');
