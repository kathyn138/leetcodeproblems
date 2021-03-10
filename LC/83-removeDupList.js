/*
83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates 
such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

var deleteDuplicates = function (head) {
  if (!head) return head;

  let current = head;
  let nextNode = head.next;

  while (nextNode !== null) {
    if (current.val !== nextNode.val) {
      current.next = nextNode;
      current = nextNode;
    }

    nextNode = nextNode.next;
  }

  current.next = null;
  return head;
};


// to test my code

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) { this.head = newNode; }
    if (this.tail !== null) { this.tail.next = newNode; }
    this.tail = newNode;
    this.length++;
  }

  removeDup(head) {
    if (!head) return head; 

    let current = head;
    let nextNode = head.next;

    while (nextNode !== null) {
      if (current.val !== nextNode.val) {
        current.next = nextNode;
        current = nextNode; 
      }
      
      nextNode = nextNode.next; 
    }

    current.next = null;
    return head;
  }
}

let lst = new LinkedList();
lst.push(1);
lst.push(1);
lst.push(2);
lst.push(3);
lst.push(3);
console.log(lst.removeDup(lst.head));
