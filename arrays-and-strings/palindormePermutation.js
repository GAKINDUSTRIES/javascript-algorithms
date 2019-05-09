// Given a string, write a function to check if it;s a permutations of a plindrome. a palindorme is a word or phrase that is the same forwards and backwards.
// A permutation is a rearregement of letters. The palindorme does not need to be limited to just dictionary words.
// Example:
//          Input : Tact Coa
//          Output: True --> permutattions ("taco cat", "atcco cta")


// "taco cat"  , "atcco cta"

// Solution1
// - Data structure: Hash
// - Assumptions: working with ASCII chars
// - Pseudo code
//    - if empty string, return true
//    - Loop through the string and save the amount of occurrences of each character
//    - Loop through the hash and check:
//      - if it has more than one odd value, return false, else return true
// - Time Complexity: O(n)
// - Space Complexity: O(1): Since you can only story at 128 chars at most
//
//

const isEmpty = str => {
  return str ===  '';
}

const isUnary = str => {
  return str.length === 1;
}

const checkPalindromeHash = h1 => {
  let oddValue = false;
  for (key in h1) {
    if (isodd(h1[key])) {
      if (oddValue) return false;
      oddValue = true;
    }
  }
  return true;
}

const palindormePermutation1 = str => {
  let palindormeHash = {};
  if (isEmpty(str) || isUnary(str)) return true;
  for ( const i of str ) {
    if (i === ' ') continue;
    (palindormeHash[i] == undefined) ? palindormeHash[i] = 1 : palindormeHash[i]++;
  }
  return checkPalindromeHash(palindormeHash);
}

// console.log(palindormePermutation1('')); //return true
// console.log(palindormePermutation1('a')); // return true
// console.log(palindormePermutation1('aba')); // return true
// console.log(palindormePermutation1('taco cat')); //return true
// console.log(palindormePermutation1('abbbffaeeeei')); //return false
// console.log(palindormePermutation1('abbbfffaeeee')); //return false
// console.log(palindormePermutation1('abaa')); //return false

// Solution2
// - Data structure: None
// - Pseudocode:
//    - if string is empty or unary, return true
//    - Sort the array
//    - If we found two characters with odd occurrences inside the string, then we return false
// - Time Complexity of O(n)
// - Time Complexity of O(1)
//
//

const isoddNumber = num => {
  return num % 2 === 1;
};

const palindormePermutation2 = str => {
  if (isEmpty(str) || isUnary(str)) return true;
  strArray = str.split('').sort();
  let oddValue = false;
  let charOccurences = 0;
  let currentChar = '';
  for (const i of strArray) {
    if (i === ' ') continue;

    if (currentChar === '')  {
      currentChar = i;
      charOccurences = 1;
    } else if (currentChar !== i) {
        console.log(currentChar, i , charOccurences);
        let isodd = isoddNumber(charOccurences);
        currentChar = i;
        if ( oddValue && isodd ) return false;
        oddValue = isodd;
        charOccurences = 1;
    } else { charOccurences++; }
  }
  console.log(oddValue, charOccurences);
  return oddValue && isoddNumber(charOccurences);
};

console.log(palindormePermutation2('')); //return true
console.log(palindormePermutation2('a')); // return true
console.log(palindormePermutation2('aba')); // return true
console.log(palindormePermutation2('taco cat')); //return true
console.log(palindormePermutation2('abbbffaeeeei')); //return false
console.log(palindormePermutation2('abbbfffaeeee')); //return false
console.log(palindormePermutation2('abaa')); //return false
