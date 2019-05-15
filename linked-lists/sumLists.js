// You have two numbers represented by a linked list, where each node contains a single digit, The digits are stored in reverse order, such that the 1's digit is at the head of the list. Wrtie a function that adds the two number and returns the sum as a linked list.
//
//Solution:
//  - Pseudcode:
//      - Iterate through list 1
//        - Calculate number based on : digit * 10 ^ iterator
//      - Iterate through list 2
//        - Calculate number based on : digit * 10 ^ iterator
//      - Sum up both numbers
//      - Save number in newList
//      - return newList
//  Time complexity O(n) -> n = max (length(l1), length(l2))
//  Space complexity O(1)
//
//
const LinkedList = require('./../utils/LinkedList.js').LinkedList;
const ListNode = require('./../utils/LinkedList.js').ListNode;

const isEmpty = list => {
  return list.getHead() == null;
}

const getNumber = list => {
  let iterator = 0;
  let number = 0;
  let node = list.getHead();
  while (node != null) {
    let digit = node.getVal();
    number = number + digit * Math.pow(10, iterator)
    iterator++;
    node = node.next();
  }

  return number;
}

const getListFromNumber = number => {
  let stringNumber = new String(number);
  return new LinkedList(stringNumber);
}


const sumLists = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  } else if (isEmpty(list2)) {
    return list1;
  };

  let list1Number = getNumber(list1);
  let list2Number = getNumber(list2);

  let newNumber = list1Number + list2Number;

  return getListFromNumber(newNumber);
};

let list1 = new LinkedList([6,1,7]);
let list2 = new LinkedList([2,9,5]);
let result = sumLists(list1, list2);
console.log(result.print());


let list3 = new LinkedList([6,1,7]);
let list4 = new LinkedList();
let result2 = sumLists(list3, list4);
console.log(result2.print());


// Follow up: Suppose the digits are store in forward order. Repeat the above problem.
//
//
// Solution: Iterate first time to Calculate size of linked list
//           number = currentNode.value() * 10 ^ (size - iterator)
