/*
103. Binary Tree Zigzag Level Order Traversal

    // this is my BRUTE FORCE method

Given a binary tree, return the zigzag level order 
traversal of its nodes' values. (ie, from left to 
right, then right to left for the next level and 
alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  let res = [[root.val]];
  let currQueue = [root];
  let nextQueue = [];
  let count = 1;

  while (currQueue.length) {
    let currNode = currQueue.shift();

    if (currNode.right !== null) {
      nextQueue.push(currNode.right);
    }

    if (currNode.left !== null) {
      nextQueue.push(currNode.left);
    }

    if (currQueue.length === 0 && nextQueue.length) {
      let qVal = [];

      // 'flip' between each level
      if (count % 2 === 0) {
        for (let i = nextQueue.length - 1; i >= 0; i--) {
          qVal.push(nextQueue[i].val);
        }
      } else {
        for (let item of nextQueue) {
          qVal.push(item.val);
        }
      }

      count++;

      res.push(qVal);
      currQueue = [...nextQueue];
      nextQueue = [];
    }
  }

  return res;
};