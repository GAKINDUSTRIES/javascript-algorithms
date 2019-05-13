// Write code to partition a linked list around a value x, such that all node less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right position"; it does not need to appear between the left and right partitions
//
//
// Solution:
//  Data structure: Linked lists
//  Psuedocode:
//    - Return null if list is null or if list.next is null
//    - Create two auxiliary linked lists
//    - iterate through list
//      - Put elements bigger or equal than partition value into one auxiliary linnk
//      - Put elements smaller than partition value into the other auxiliary link
//    - Cocat linked lists
//  Time Complexity: O(n) -> amount nodes in linked list
//  Space Complexity: O(n/2) ~ O(n)
//
//
const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

const setListNode = (node, beginList, endList) => {
  if (endList == null) {
    beginList = node;
    endList = node;
  } else {
    endList.setNext(node);
    endList = endList.next();
  }
  console.log('===========================');
  console.log(beginList);
  console.log(endList);
  console.log('===========================');
}

const partition = (list, val) => {
  let node = list.getHead();
  if (node == null || node.next() == null) return list;

  let beginSmallerList;
  let endSmallerList;
  let beginBiggerList;
  let endBiggerList;
  let auxNode

  while (node != null) {
    if (node.getVal() >= val) {
      setListNode(node, beginBiggerList, endBiggerList);
    } else {
      setListNode(node, beginSmallerList, endSmallerList);
    }
    auxNode = node;
    node = node.next();
    auxNode.setNext(null);
  }

  if (endSmallerList == null) {
    return list.setHead(beginBiggerList);
  } else {
    return list.setHead(endSmallerList.setNext(beginBiggerList));
  }
}

const list1 = new LinkedList([]);
const list2 = new LinkedList([1]);
const list3 = new LinkedList([5,5,5,5,5,5,5]);
const list4 = new LinkedList([1,1,1,1,1,1,1]);
const list5 = new LinkedList([3,5,8,5,10,2,1]);

console.log(partition(list1).print());
console.log(partition(list2).print());
console.log(partition(list3).print());
console.log(partition(list4).print());
console.log(partition(list5).print());
