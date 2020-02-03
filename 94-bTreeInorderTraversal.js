/*
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
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
 * @return {number[]}
 */
// recursive
// var inorderTraversal = function(root, res = []) {
//     if (root) {
//         if (root.left) inorderTraversal(root.left, res);
//         res.push(root.val);
//         if (root.right) inorderTraversal(root.right, res);
//     }
//     return res;
// };

// iterative
var inorderTraversal = function(root) {
  if (root === null) return [];
  
  let stack = [];
  let res = [];
  let currNode = root; 
  
  while (currNode || stack.length) {
      if (currNode) {
          // keep traveling left for as long as possible
          stack.push(currNode);
          currNode = currNode.left;
      } else {
          currNode = stack.pop();
          // when can no longer go left, push
          res.push(currNode.val);
          currNode = currNode.right;
      }
  }
  
  return res;
};