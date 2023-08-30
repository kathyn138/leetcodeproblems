/*
141. Linked List Cycle

Given head, the head of a linked list, determine 
if the linked list has a cycle in it.

There is a cycle in a linked list if there is 
some node in the list that can be reached again 
by continuously following the next pointer. 
Internally, pos is used to denote the index of 
the node that tail's next pointer is connected 
to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. 
Otherwise, return false.
*/

// 2023 soln
// O(n) time complexity
// O(1) space complexity
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head;

  // check fast bc that one would reach null first
  while (fast && fast.next) {
    // slow progresses by 1
    // fast progresses by 2
    slow = slow.next;
    fast = fast.next.next;

    // if there is cycle, eventually slow and fast will meet
    // max number of iterations it could take is length of LL
    if (slow === fast) return true;
  }

  return false;
};

// 2020 soln
// O(n) time and space complexity
var hasCycle = function (head) {
  if (head === null) return false;

  // use a set to keep track if we've visited a node before
  let seen = new Set();

  // !head doesn't work
  while (head !== null) {
    if (seen.has(head)) return true;
    seen.add(head);
    head = head.next;
  }
  return false;
};
