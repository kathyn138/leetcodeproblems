/*
Given two binary trees, write a function to check if they 
are the same or not.

Two binary trees are considered the same if they are 
structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true

Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/


var isSameTree = function (p, q) {
  if (!p && q) return false;
  if (!q && p) return false;

  let toVisitQ1 = [p];
  let toVisitQ2 = [q];


  while (toVisitQ1.length && toVisitQ2.length) {
    let current1 = toVisitQ1.shift();
    let current2 = toVisitQ2.shift();

    if (current1 === null && current2 === null) continue;

    if (current1 === null || current2 === null || current1.val !== current2.val) return false;

    toVisitQ1.push(current1.left);
    toVisitQ2.push(current2.left);
    toVisitQ1.push(current1.right);
    toVisitQ2.push(current2.right);
  }
  return true;
};