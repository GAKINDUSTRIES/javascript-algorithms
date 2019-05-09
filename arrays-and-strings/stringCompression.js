// Implement a method to perform basic string compression usign the couns of repeated characters.
// If the "compressed" string would not becoume smaller than the original string, your method should return the origin string.
// You can assume the string has only uppercase and lowercase letters
// Example: aabcccccaaa become a2b1c5a3
//
// '' ->
// 'a' -> 'a'
//
// Solution1
//  - Data structure: None
//  - Pseudcode:
//      - if length(str) <= 1 return str
//      - iterate through the string
//        - while same current letter -> increase counter
//        - if letter changes
//          -if counter equals 1, append letter
//          - else append letter plus counter
//          -reset counter, update current letter
// - Time complexity: O(n) n -> length(str)
// - Space complexity: O(1)

const appendChar = (str, newChar, counter) => {
  return str + `${newChar}${(counter === 1) ? '' : counter }`
}

const stringCompression = str => {
  if (str.length <= 1) return str;
  currentChar = str[0];
  counter = 0;
  let newStr = '';
  for (strChar of str) {
    if (currentChar === '') {
      counter++;
    } else if (currentChar !== strChar){
      newStr = appendChar(newStr, currentChar, counter);
      counter = 1;
      currentChar = strChar;
    } else {
      counter++;
    }
  }

  return appendChar(newStr, currentChar, counter);
}

console.log(stringCompression('a'));
console.log(stringCompression(''));
console.log(stringCompression('abc'));
console.log(stringCompression('aaaabbbbbczsggerrwww'));
