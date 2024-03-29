/*
235. Lowest Common Ancestor of a Binary Search Tree

HAS BOTH OPTIMAL AND BRUTE FORCE APPROACHES 

Given a binary search tree (BST), find the lowest common 
ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest 
common ancestor is defined between two nodes p and q as the 
lowest node in T that has both p and q as descendants (where 
we allow a node to be a descendant of itself).”
 

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a 
descendant of itself according to the LCA definition.

Example 3:
Input: root = [2,1], p = 2, q = 1
Output: 2
 
Constraints:
* The number of nodes in the tree is in the range [2, 105].
* -109 <= Node.val <= 109
* All Node.val are unique.
* p != q
* p and q will exist in the BST.
*/

// OPTIMAL APPROACH
var lowestCommonAncestor = function (root, p, q) {
  let curr = root;

  // looking at where the subtree splits
  // at the split, p and q won't be part of the tree
  // or one is the parent of the other

  while (curr) {
    // if both p and q are less than curr
    if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
};

// BRUTE FORCE APPROACH

var lowestCommonAncestor = function (root, p, q) {

  function findAncestors(root, targetNode) {
    // bfs
    let queue = [root];
    let res = [];

    while (queue.length) {
      let curr = queue.shift();

      res.push(curr);

      if (curr.val === targetNode.val) return res;

      if (targetNode.val < curr.val) {
        queue.push(curr.left);
      } else {
        queue.push(curr.right);
      }
    }

    return res;
  }

  let pAncestors = findAncestors(root, p);
  let qAncestors = findAncestors(root, q);


  // loop through ancestor lists 
  let longer = pAncestors.length > qAncestors.length ? pAncestors : qAncestors;
  let shorter = pAncestors.length > qAncestors.length ? qAncestors : pAncestors;

  for (let i = longer.length - 1; i > -1; i--) {
    for (let j = shorter.length - 1; j > -1; j--) {
      if (longer[i].val === shorter[j].val) return longer[i];
    }
  }
};