/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 2023 soln
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

// 2019 soln
var reverseList = function (head) {
  let pre = null;
  while (head) {
    let curr = head.next;
    head.next = pre;
    pre = head;
    head = curr;
  }
  // latter works but is slower
  // while (head) {
  //     let curr = head;
  //     head = head.next;
  //     curr.next = pre;
  //     pre = curr;
  // }
  return pre;
};
