// Implement a function to check if a linked list is a palindrome
//
//  a -> b -> c-> d -> c -> b -> a
//  a -> b -> b-> a
//
// Solution:
//
// Pseudocode:
//  - If linkedlist is null return false
//  - If linkedlist has only one elem -> return true
//  - Get size of the list -> size = x
//  - l1 = head of list, l2 = list starting at size + 1
//  - l2' = reverse (list 2)
//  - Iterate through linked lists
//     return false if elem1 != elem2
//  - Return true
//
//  Time complexity: O(n) , n = size of the linked-list
//  Space complexity: O(n/2) ~ O(n) , n = size of the linked-list
//

const LinkedList = require('./../utils/LinkedList').LinkedList
const ListNode = require('./../utils/LinkedList').ListNode


const getListAt = (node, iterator) => {
  let auxNode = node;
  while (auxNode != null && iterator ) {
    iterator--;
    auxNode = auxNode.next();
  }

  return auxNode;
};

const reverseList = node => {
  let auxNode = node;
  let newList;
  let newNode;
  while (auxNode != null) {
    newNode = new ListNode (auxNode.getVal());
    if (newList == null) {
     newList =  newNode;
    } else {
      newNode.setNext(newList);
      newList = newNode;
    }
    auxNode = auxNode.next();
  }

  return newList;
}

const getSize = node => {
  let auxNode = node;
  let size = 0;
  while (auxNode != null) {
    size++;
    auxNode = auxNode.next();
  }
}

const palindrome = list => {
  let node = list.getHead();
  if (node == null) return false;
  if (node.next() == null) return true;

  const size = getSize(node);
  const halfSize = Math.round(size / 2);

  let l2 = getListAt(node, halfSize + 1);
  let reversedL2 = reverseList(l2);

  while (node != null) {
    if ( node.getVal() != reversedL2.getVal()) return false;
    node = node.next();
    reversedL2 = reversedL2.next();
  }

  return true;
}

let l1 = new LinkedList(['a', 'b','c','b','a'])
console.log(palindrome(l1)); // returns true

let l2 = new LinkedList(['a', 'b','b','a'])
console.log(palindrome(l2)); // returns true

let l3 = new LinkedList(['a', 'b','b','ca'])
console.log(palindrome(l3)); // returns false
