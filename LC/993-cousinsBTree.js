/*
993. Cousins in Binary Tree

In a binary tree, the root node is at depth 0, 
and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have 
the same depth, but have different parents.

We are given the root of a binary tree with unique 
values, and the values x and y of two different nodes 
in the tree.

Return true if and only if the nodes corresponding 
to the values x and y are cousins.

Example 1:
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example 2:
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true

Example 3:
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Note:
1. The number of nodes in the tree will be between 2 and 100.
2. Each node has a unique integer value from 1 to 100.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (root === null) return false; 
  
  let xHere = false; 
  let yHere = false;
  let xParent = 0; 
  let yParent = 0; 
  let currQueue = [root];
  let nextQueue = [];
  
  while (currQueue.length) {
    let curr = currQueue.shift();
    
    if (curr.val === x) {
      xHere = true; 
    } 
    
    if (curr.val === y) {
      yHere = true; 
    }
    
    if (curr.left) {
      nextQueue.push(curr.left);
      
      if (curr.left.val === x) {
          xParent = curr.val;
      } 

      if (curr.left.val === y) {
          yParent = curr.val;
      }
    }
    
    if (curr.right) {
      nextQueue.push(curr.right);
      
      if (curr.right.val === x) {
          xParent = curr.val;
      } 

      if (curr.right.val === y) {
          yParent = curr.val;
      }
    }
    
    // upon finishing a level, check if x or y is present
    // and check their parents 
    // if they're on different levels, it's false 
    if (currQueue.length === 0 && nextQueue.length) {
      currQueue = [...nextQueue];
      nextQueue = [];
      
      if (xHere || yHere) {
        return (xHere === yHere) && (xParent !== yParent); 
      }
    }
  }
  
  // need this for when x and y are leaf nodes
  return (xHere === yHere) && (xParent !== yParent); 
};
