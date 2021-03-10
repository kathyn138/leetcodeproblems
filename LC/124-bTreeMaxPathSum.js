/*
124. Binary Tree Maximum Path Sum

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes 
from some starting node to any node in the tree along the parent-child 
connections. The path must contain at least one node and does not need 
to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6

Example 2:
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let sum = root.val;

  function computeForNode(node) {
    if (node == null)
      return 0;

    let leftSum = computeForNode(node.left);
    let rightSum = computeForNode(node.right);

    sum = Math.max(
      sum,
      node.val + leftSum + rightSum
    );


    return Math.max(
      0,
      node.val + leftSum,
      node.val + rightSum
    );

  }

  computeForNode(root);
  return sum;
};