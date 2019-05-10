// Implement an algorithm to find the kth to last element of a singly linked list
//
const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

// find 5
// [2, 2, 3, , 2, 2, 'x', 2, 2, 3, 3]
//                                   *
// |

// Solution :
// Psuedocode:
//  - if the list is null, return null
//  - if the number is negative, return null
  // Time complexity: O(n) n -> size of linked list
  // Space complexity: O(1)

const findkElement = (node, k, size) => {
  if (size < k) return null;
  while (k !== size) {
    size--;
    node = node.next();
  }

  return node.getVal();
}

const kToLast = (list, k) => {
  let node = list.getHead();
  if (node === null || k <= 0) return null;
  let size = 0;
  while (node !== null) {
    size++;
    node = node.next();
  }

  return findkElement(list.getHead(), k, size);
}

let list1 = new LinkedList([2, 2, 3, 2, 4, 5, 'x', 2, 2, 3, 3].reverse())
let list2 = new LinkedList([2, 3].reverse())
let list3 = new LinkedList([].reverse())
let list4 = new LinkedList([1].reverse())

console.log(kToLast(list1, 5))
console.log(kToLast(list2, 3))
console.log(kToLast(list3, 0))
console.log(kToLast(list4, 1))
