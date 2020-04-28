/*
107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal 
of its nodes' values. (ie, from left to right, level by level 
  from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) return [];

  let resultArr = [[root.val]];

  let currQ = [root];
  let nextQ = [];

  while (currQ.length) {
    let current = currQ.shift();

    if (current.left !== null) {
      nextQ.push(current.left);
    }

    if (current.right !== null) {
      nextQ.push(current.right);
    }

    if (currQ.length === 0 && nextQ.length) {
      let onLevelQ = [];

      for (let item of nextQ) {
        onLevelQ.push(item.val);
      }

      resultArr.unshift(onLevelQ);
      currQ = [...nextQ];
      nextQ = [];
    }
  }

  return resultArr;
};