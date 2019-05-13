class LinkedList {
  constructor(array=[]) {
    let node;
    for (let i = 0; i < array.length; i++) {
      node = new ListNode(array[i]);
      if (this._head !== undefined)  {
        node.setNext(this._head);
      };

      this._head = node;
    }
  }

  print() {
    let current = this._head;
    let arr = [];
    while (current != null) {
      arr.push(current.getVal());
      current = current.next();
    }
    console.log(arr);
  }

  getHead() {
    return this._head;
  }

  setHead(node) {
    this._head = node;
  }
}

class ListNode {
  constructor(val) {
    this._val = val;
    this._next = null;
  }

  setNext(nextNode) {
    this._next = nextNode;
  }

  next() {
   return  this._next
  }

  getVal() {
    return this._val;
  }

  setVal(val) {
    this._val = val;
  }
}

module.exports.ListNode = ListNode;
module.exports.LinkedList = LinkedList;
