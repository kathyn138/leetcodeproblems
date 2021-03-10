/*
Given the head of a linked list and a value x, 
partition it such that all nodes less than x 
come before nodes greater than or equal to x.

You should preserve the original relative order 
of the nodes in each of the two partitions.

Example 1: 
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]
 

Constraints:
* The number of nodes in the list is in the 
range [0, 200].
* -100 <= Node.val <= 100
* -200 <= x <= 200
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
  let lessThanX = new ListNode();
  let moreThanX = new ListNode();
  let dummy1 = lessThanX;
  let dummy2 = moreThanX;
  let curr = head;

  while (curr) {
    let next = curr.next;
    if (curr.val < x) {
      lessThanX.next = curr;
      lessThanX = lessThanX.next;
    } else {
      moreThanX.next = curr;
      moreThanX = moreThanX.next;
    }
    curr.next = null;
    curr = next;
  }

  lessThanX.next = dummy2.next;
  // with head = [1,4,3,2,5,2], lessThanX initially is the entire list [1,4,3,2,5,2]
  // gets reduced as we go on (same for moreThanX)
  // dummy1 keeps track of a less than x list as we go on
  // overwrite with lessThanX.next = dummy2.next
  // lessThanX.next then points to >= x
  // that's why we need dummy1
  // dummy2.val = 0 while dummy2.next has >= x
  // dummy1.val = 0, dummy.next has it all connected
  return dummy1.next;
};