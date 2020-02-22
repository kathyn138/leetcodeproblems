/*
2. Add Two Numbers

You are given two non-empty linked lists representing two 
non-negative integers. The digits are stored in reverse order 
and each of their nodes contain a single digit. Add the two 
numbers and return it as a linked list.

You may assume the two numbers do not contain any leading 
zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // don't need to reverse LL
  // bc we're sort of adding backwards when we move 
  // sum (which also acts as a remainder) over to the right

  let list = new ListNode();
  let tail = list;
  let sum = 0;

  while (l1 || l2 || sum > 0) {
    // sum > 0 is meant to check for when 
    // you're at the end of the LL 
    // and if the last sum at the end is > 10 
    // because then there's a remainder of 1 

    tail.next = new ListNode(sum);
    tail = tail.next;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      tail.val = sum - 10;
      sum = 1;
    } else {
      tail.val = sum;
      sum = 0;
    }
  }

  return list.next;
};