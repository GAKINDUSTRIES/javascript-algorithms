// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient spaces at the end oto hold the additional characters, and that you are given the "true" length of the string.
// Example:
// Input:  "Mr John Smith    ", 13
// Output: "Mr%20John%20Smith"
//
// - Solution1
// - Pseudo code
//    - Trim string to remove spaces at begginning and end
//    - Iterate through array and check if char is a spaces
//    - If it's a space, replace it with "%20" else, move on
//    - return new string
// - Time complexity: O(n) -> n = length(str)
// - Space complexity: O(n) -> n = length(str)

const urlify1 = (string, stringLength) => {
  const specialChar = '%20'
  string = string.trim().split('');
  for (const i in string) {
    if (string[i] === ' ') {
      string[i] = specialChar;
    }
  }

  return string.join('')
}

console.log(urlify('   Guillermo Kuster  ', 16));
console.log(urlify('My name is Peter Parker', 23));
console.log(urlify('    ', 0));
console.log(urlify('a', 1));
