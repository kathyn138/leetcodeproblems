/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  let currNode = head.next;
  let prevNode = head;

  while (currNode) {
    if (currNode.val === val) {
      currNode = currNode.next;
      prevNode.next = currNode;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }

  // for when you have [6, 6] or [6]
  if (head.val === val) return head.next;
  return head;
};