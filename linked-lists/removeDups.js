// Write code to remove duplicates froma an unsorted linked list
// Solution:
//   - Data structure: Hash
//   Psuedocode:
//     - Iterate through the linkedList until the end
//     - if the value already exist in the hash
//          delete node
//     - if not,
//          add value to the hash
//     - move to next node
//
//    - Time Complexity: O(n) -> n = number of nodes in linked list
//    - Space Complexity: O(n) -> n = number of nodes in linked list

const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

const removeDups = list => {
  let currentNode = list.getHead();
  if (currentNode == null) return null;
  let h1 = {};
  let previousNode;
  let currentValue = '';

  h1[currentNode.getVal()] = true;
  previousNode = currentNode;
  currentNode = currentNode.next();

  while (currentNode !== null) {
    currentValue = currentNode.getVal();
    if (h1.hasOwnProperty(currentValue))  {
      currentNode = currentNode.next();
      previousNode.setNext(currentNode);
    } else {
      h1[currentValue] = true;
      previousNode = currentNode;
      currentNode = currentNode.next();
    };
  }

  return list.print();
}

list1 = new LinkedList([1,2,3,4,5,6,7,2,5,6,4]);
list2 = new LinkedList(['1','2','3','4','5','6','7','2','5','6','4']);
list3 = new LinkedList([]);
list4 = new LinkedList([1]);
list5 = new LinkedList([1,1,1,1,1,1]);

removeDups(list1);
removeDups(list2);
removeDups(list3);
removeDups(list4);
removeDups(list5);

// Follow up
//
// How would you solve it this problem if a temprary buffer is not allowed
//
// Solution:
// Iterate twice and compare all the elements
// Time complexity: O(n^2)
// Space complexity: O(1)

const removeDups2 = list => {
  let node1 = list.getHead();

  if (node1 == null || node1.next() == null) return list;

  while (node1 !== null) {
    let node2 = node1.next();
    let prev = node1;
    while (node2 !== null) {
      if (node1.getVal() === node2.getVal()){
        prev.setNext(node2.next());
        node2 = node2.next();
      } else {
        prev = prev.next();
        node2 = node2.next();
      }
    }
    node1 = node1.next();
  }

  return list.print();
}

removeDups2(list1);
removeDups2(list2);
removeDups2(list3);
removeDups2(list4);
removeDups2(list5);
