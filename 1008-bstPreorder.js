/*
1008. Construct Binary Search Tree from Preorder Traversal

Return the root node of a binary search tree that matches the 
given preorder traversal.

(Recall that a binary search tree is a binary tree where for 
every node, any descendant of node.left has a value < node.val, 
and any descendant of node.right has a value > node.val.  
Also recall that a preorder traversal displays the value of the 
node first, then traverses node.left, then traverses node.right.)

Example 1:
Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

Note: 
1. 1 <= preorder.length <= 100
2. The values of preorder are distinct.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
function insert(root, currVal) {
  // basecase
  if (root === null) return new TreeNode(currVal);
    
  // comparing current value to root value 
  if (currVal < root.val) {
    root.left = insert(root.left, currVal);
  } else {
    root.right = insert(root.right, currVal);
  }
  
  // return root with currVal inserted
  return root;
}

var bstFromPreorder = function(preorder) {
  // basecase of empty or 1 node tree
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  
  // returned tree
  let res = new TreeNode(preorder[0]);
  
  // going through preorder and inserting into res
  // start at 1 bc already have preorder[0] in res 
  for (let i = 1; i < preorder.length; i++) {
    res = insert(res, preorder[i])
  }
  
  return res; 
};