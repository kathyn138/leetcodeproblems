/*
102. Binary Tree Level Order Traversal

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return [];

    let returnArr = [[root.val]];
    let currQ = [root];
    let nextQ = [];
    
    // nextQ keeps track of the next level's children 
    
    while (currQ.length) {
      let current = currQ.shift();

      if (current.left !== null) {
        nextQ.push(current.left);
      }

      if (current.right !== null) {
        nextQ.push(current.right);
      }
        // when currQ is empty, it means that we finished a level 
        // we replace currQ's values with nextQ to move onto the next level
        // nextQ is empty when we reach the bottom of the tree
        // to avoid pushing an extra empty [] to returnArr, check nextQ's length
      
      if (currQ.length === 0 && nextQ.length) {
        let nextQVal = [];

        for (let item of nextQ) {
          nextQVal.push(item.val);
        }

        returnArr.push(nextQVal);

        currQ = [...nextQ];
        nextQ = [];
      }
    }

    return returnArr;
};