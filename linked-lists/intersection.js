// Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node  (by reference) as the jth node of the second linked list, then they are interesecting.
//
//   1 -> 2 -> 3 -> 4 -> 5 -> 6
//
//   10 -> 23 -> 45 -> 54 -> 56 -> 3 -> 4 -> 5 -> 6
//
// Solution:
//  Psuedocode:
//    for l1, iterate until the last element of the linked list and get size, lastL1, size1
//    for l2, iterate until the last element of the linked list and get size, lastL2, size2
//    if  lastL1 == lastL2 return false
//    get up to a point when the remaining elements of both linked lists are the same
//    Iterate in both lists until you find the same node
//    return node
//
//
//  Time Complextity: O(A + B)
//  Space Complextity: O(1)

const LinkedList = require('./../utils/LinkedList').LinkedList

const getLastAndSize = node => {
  let size = 1
  while (node != null && node.next() != null) {
    size++;
    node = node.next();
  }

  return [node, size];
}

const getNodeAt = (node, position) => {
  while (position > 0) {
    position--;
    node = node.next();
  }

  return node;
}

const intersect = (list1, list2) => {
  let [node1, size1] = getLast(list1.getHead());
  let [node2, size2] = getLast(list2.getHead());
  if (node1 == null || node2 == null || node1 != node2) return false;
  let diff = Math.abs(node1 - node2);
  if (size1 > size2) {
    node1 = getNodeAt(node1, diff);
  } else if (size2 > size1) {
    node2 = getNodeAt(node2, size1);
  }

  while (node1 != node2) {
    node1 = node1.next();
    node2 = node2.next();
  }

  return node1;
}
