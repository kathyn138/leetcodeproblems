/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  // dfs recursion
  // for each node, look at depth of left and right subtree
  // if depth difference > 1, return false

  let maxDepth = 1; 

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    maxDepth = Math.max(maxDepth, Math.abs(left - right));

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return maxDepth <= 1;
};