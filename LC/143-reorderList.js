/ overall steps
// 1) find where second half starts
// 2) reverse second half
// 3) merge first and second half, alternating turns
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;

  // while fast hasn't reached end of list
  // slow shifted by 1
  // fast shifted by 2
  // slow will give you last node of first half of LL
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next; 
  // split first half and it'll be last element
  slow.next = null;

  function reverse(n) {
    let prev = null;
    let curr = n; 
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;

      // update prev first
      // then shfit curr
      prev = curr;
      curr = next;
    }

    return prev;
  }

  // reverse second half of LL
  let newSecond = reverse(secondHalf)

  // merge two halves
  let left = head; 
  let right = newSecond;

  // only need one loop bc if one LL finishes early, 
  // rest of other LL will follow
  while (left && right) {
    // save next values
    let nextLeft = left.next;
    let nextRight = right.next;

    // reorder
    left.next = right; 
    right.next = nextLeft;

    // shift to next values
    left = nextLeft;
    right = nextRight;
  }
};