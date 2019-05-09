// There are three types of edits that can be performed on string: insert a character, remove a character, or replace a character.
// Given two string, write a function to check if they are one edit (or zero edits) away.
// Example:
// pale  , ple  -> true
// pales , pale -> true
// pale , bake -> false
//
// | length(str1) - length(str2) | <= 1
//
// pale   ple
// aelp   elp
//
// Solution:
// - Data structure: None
// - Pseudocode:
//    - Compare length of str, if differs in more than one char, return false
//    - Iterate through arrays and check for differences.
//    - If you find a difference, turn on variable, if it already was turned on return false
//    - Return true
//
// - Time complexity: O(n) -> n = min(length(str1, str2))
// - Space complexity: O(1)
//
//

const smallerAndBigger = (str1, str2) => {
  if (str2.length > str1.length) {
    return [str1, str2];
  } else return [str2, str1];
}

const oneWayModification = (str1, str2) => {
  let differ = false;
  for (let i = 0; i< str1.length; i++) {
    if (differ && str1[i] !== str2[i]) return false;
    differ = str1[i] !== str2[i];
  }
  return true;
}

const oneWayAddition = (str1, str2) => {
  let [smaller, bigger] = smallerAndBigger(str1, str2);
  let differ = false;
  let i = 0;
  for (let j = 0; j < bigger.length; i++, j++) {
    if (smaller[i] !== bigger[j]) {
      if (differ) return false;
      differ = true;
      j++;
    }
  }
  return true;
}

const oneWay1 = (str1, str2) => {
  let sizeDifference = Math.abs(str1.length - str2.length)
  if (sizeDifference > 1) {
    return false;
  } else if (sizeDifference == 1) {
    return oneWayAddition(str1, str2);
  } else return oneWayModification(str1, str2);
}

console.log(oneWay1('', '')); //return true
console.log(oneWay1('a', '')); //return true
console.log(oneWay1('aba', 'aba')); //return true
console.log(oneWay1('auq', 'aba')); //return false

console.log(oneWay1('ba', 'aba')); //return true
console.log(oneWay1('aba', 'ba')); //return true
console.log(oneWay1('byaaaaa', 'bra')); //return false
console.log(oneWay1('babc', 'bbc')); //return true
