/*
257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let paths = [];
  
  if (!root) return [];
  
  let stack = [[[], root]];

  while (stack.length) {
    let [tempPath, curr] = stack.pop();
    
    // yes needs newPath to avoid reference issues
    // yes push here to avoid pushing more than once 
      // if left/right both exist then would push it twice
    let newPath = [...tempPath];
    tempPath.push(curr.val);
    
    if (!curr.right && !curr.left) {
      let reformattedPath = newPath.join('->');
      paths.push(reformattedPath);
    }
    
    if (curr.left) {
      stack.push([newPath, curr.left]);
    } 
    
    if (curr.right) {
      stack.push([newPath, curr.right]);
    }
  }
  
  return paths; 
};