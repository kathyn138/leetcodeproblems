/*
234. Palindrome Linked List
Given a singly linked list, determine if it is a 
palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
*/

var isPalindrome = function (head) {
  // LL with 0 or 1 values is a palindrome
  if (head === null || head.next === null) return true;

  let valueTracker = [];

  let curr = head;

  while (curr !== null) {
    valueTracker.push(curr.val);
    curr = curr.next;
  }

  for (let i = 0; i < valueTracker.length / 2; i++) {
    if (valueTracker[i] !== valueTracker[valueTracker.length - i - 1]) {
      return false;
    }
  }

  return true;
};