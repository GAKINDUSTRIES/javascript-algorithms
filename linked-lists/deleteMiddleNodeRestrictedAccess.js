// Implement an algorithm to delete  node in the middle (i.e any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

// THIS IMPLEMENTATION, ALTHOUGH VALID, IS NOT OPTIMAL. SEE Solution2
// Solution:
//  Pseudcode:
//    If node is null, return null
//    If node.next is null, return null
//    assign node with next value
//    call function recursively
//  Time complexity: o(n/2) ~ O(n),  n -> number of node in linked list
//  Space complexity: o(1)
//
//
const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

const deleteMiddleNodeRestrictedAccess1 = (node) => {
  if (node == null) return;
  if (node.next() == null) {
    node = null;
    return;
  }
  let nextNode = node.next();
  node.setVal(nextNode.getVal());
  deleteMiddleNodeRestrictedAccess(nextNode);
}

const getNode = (val, node) => {
  while (node != null && node.getVal() !== val) {
    node = node.next();
  }
  return node;
}

let list = new LinkedList([6,5,4,3,2,1]);
deleteMiddleNodeRestrictedAccess1(getNode(4,list.getHead()));
console.log(list.print());

// Solution2
// We don't need to swap all elements, we can just swap the first one and that's it

const deleteMiddleNodeRestrictedAccess2 = node => {
  if (node == null || node.next == null) return;
  let next = node.next()
  node.setVal(next.getVal());
  node.setNext(next.next());
  return;
}
