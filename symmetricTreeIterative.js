/* 
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  isSymmetric() {
    if (this.root === null) return null;

    // divide tree into subtree
    let q1 = [this.root.left];
    let q2 = [this.root.right];

    while (q1.length || q2.length) {
      let curr1 = q1.shift();
      let curr2 = q2.shift();

      // need this check to go to next iteration of loop
      if (curr1 === null && curr2 === null) continue;

      if (curr1 === null || curr2 === null || curr1.val !== curr2.val) return false;

      // left or curr1 will be mirred onto right of curr2
      // for curr1, push left to right and curr2, push right to left to get in same order
      q1.push(curr1.left);
      q1.push(curr1.right);
      q2.push(curr2.right);
      q2.push(curr2.left);
    }

  return true; 
  };
}


// to test my code 
let node5 = new BinaryTreeNode(4);
let node4 = new BinaryTreeNode(5);
let node3 = new BinaryTreeNode(4);
let node2 = new BinaryTreeNode(3, node4, node5);
let node1 = new BinaryTreeNode(3, node3, node4);
let root = new BinaryTreeNode(2, node1, node2);
let testTree = new BinaryTree(root);

console.log(testTree.isSymmetric());
// true 