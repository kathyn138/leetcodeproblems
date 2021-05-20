/*
Given the root node of a binary search tree and 
two integers low and high, return the sum of 
values of all nodes with a value in the inclusive 
range [low, high].
*/

var rangeSumBST = function (root, low, high) {
  let sum = 0;

  function traverse(root) {
    if (root.val >= low && root.val <= high) sum += root.val;

    if (root.left !== null) traverse(root.left);
    if (root.right !== null) traverse(root.right);
  }

  traverse(root);
  return sum;
};