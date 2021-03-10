/*
61. Rotate List

This is my brute force approach. 

Given a linked list, rotate the list to the right by k places,
where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
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
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function (head, k) {
  if (head === null || k === 0) return head;

  let tempArr = [head.val];
  let curr = head;

  while (curr.next !== null) {
    curr = curr.next;
    tempArr.push(curr.val);
  }

  for (let i = 0; i < k; i++) {
    let temp = tempArr[tempArr.length - 1];

    for (let j = tempArr.length - 1; j >= 0; j--) {
      if (j === 0) {
        tempArr[0] = temp;
      } else {
        tempArr[j] = tempArr[j - 1];
      }
    }
  }

  let currNode = head;
  head.val = tempArr[0];

  for (let l = 1; l < tempArr.length; l++) {
    currNode = currNode.next;
    currNode.val = tempArr[l];
  }

  return head;
};