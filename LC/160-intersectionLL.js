/*
160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists 
headA and headB, return the node at which 
the two lists intersect. If the two linked 
lists have no intersection at all, return null.
*/

var getIntersectionNode = function(headA, headB) {
  // use set to see if we intersected at a value
  let values = new Set();
  let currA = headA;
  
  while (currA) {
      values.add(currA);
      currA = currA.next;
  }
  
  let currB = headB;
  
  while(currB) {
      if (values.has(currB)) return currB;
      values.add(currB);
      currB = currB.next;
  }
  
  return null;
};