/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new 
list. The new list should be made by splicing together 
the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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

// 2023 soln
var mergeTwoLists = function(list1, list2) {
  let mergedList = new ListNode();
  let newHead = mergedList;
  let left = list1;
  let right = list2;

  // while both exist
  while (left && right) {
    // need temp placeholder for node to be added
    let node; 

    if (left.val < right.val) {
      node = new ListNode(left.val, null);
      // add node to mergedList
      mergedList.next = node; 
      // increment left
      left = left.next;
    } else {
      node = new ListNode(right.val, null);
      mergedList.next = node;
      right = right.next;
    }

    // dont forget to increment mergedList to move along
    mergedList = mergedList.next;
  }

  // if only 1 exists
  // dont need while loop bc just attach rest
  // need check both bc could both be ! aka end
  if (!left && right) {
    mergedList.next = right; 
  }

  if (!right && left) {
    mergedList.next = left; 
  }

  // return newHead bc mergedList is last merged element
  // return newHead.next bc newHead initializes with list node 0 
  return newHead.next;
};

// 2019 soln 
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  let res = new ListNode(0);
  let curr = res;

  while (l1 && l2) {
    // add node with smallest val first

    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // for when not l1 && l2
  // adds remaining of longer list to res
  if (l1) curr.next = l1;
  if (l2) curr.next = l2;

  return res.next;
};