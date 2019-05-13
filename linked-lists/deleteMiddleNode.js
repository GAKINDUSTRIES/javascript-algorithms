// Implement an algorithm to delete  node in the middle (i.e any node but the first and last node, not necessarily the exact middle) of a singly linked list.
//
// Solution:
// - Pseudocode:
//    - if list is null, return null
//    - Loop until the end of the list, and calculate size()
//    - Calculate size of half of the linked list
//    - Iterate in list until reaching the half of it using two pointers
//    - delete node
//    - return null
//  - Time complexity: O(n) n-> size of the linked list
//  - Space complexity: O(1)
//
const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

const getSize = node => {
  let size = 0
  while (node !== null) {
    size++;
    node = node.next();
  }
  return size;
}

const deleteMiddleNode = list => {
  let currentNode = list.getHead();
  if (currentNode == null) return;
  if (currentNode.next() === null) {
    list.setHead(null);
    return;
  };

  let size = getSize(list.getHead());

  let halfSize = Math.round(size / 2);
  let prevNode;

  while (halfSize !== 1) {
    halfSize--;
    prevNode = currentNode;
    currentNode = currentNode.next();
  }

  prevNode.setNext(currentNode.next());

  return null;
}

let list1 = new LinkedList([7,6,5,4,3,2,1]);
let list2 = new LinkedList([6,5,4,3,2,1]);
let list3 = new LinkedList([1]);
let list4 = new LinkedList([]);

deleteMiddleNode(list1);
deleteMiddleNode(list2);
deleteMiddleNode(list3);
deleteMiddleNode(list4);

console.log(list1.print());
console.log(list2.print());
console.log(list3.print());
console.log(list4.print());
