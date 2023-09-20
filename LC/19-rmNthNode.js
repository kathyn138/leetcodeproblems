var removeNthFromEnd = function(head, n) {
  // runtime: O(n)
  // space complexity: O(1)
  // have dummy node that left initializes with
  // have right node n spaces away
  // increment left and right by 1 until right is null
  // when right is null, left will be at node before nth node
  // delete nth node, can point to .next.next directly
  // return dummy.next

  // dummy node helps with cases like
  // `linked_list = [1]` and `n = 1`, or remove the first (head) node in a list of length 2


  let dummy = new ListNode(0, head);
  let left = dummy; 
  let right = head;

  while (n > 0) {
    n--;
    right = right.next;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};