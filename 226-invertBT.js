/*
226. Invert Binary Tree

I wrote 2 solutions. 
One without recursion and one with recursion. 

Invert a binary tree.

Example:

Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
// without recursion 
// don't need a second arr to keep track of nextQ
// var invertTree = function(root) {
//     if (!root) return root; 

//     let currQueue = [root];

//     while (currQueue.length) {
//         let currNode = currQueue.shift();

//         if (currNode.left) {
//             currQueue.push(currNode.left);
//         }

//         if (currNode.right) {
//             currQueue.push(currNode.right);
//         }

//         let temp = currNode.left;
//         currNode.left = currNode.right; 
//         currNode.right = temp; 
//     }

//     return root;
// };

// with recursion 
var invertTree = function (root) {

  if (root) {
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
  }

  return root;
};