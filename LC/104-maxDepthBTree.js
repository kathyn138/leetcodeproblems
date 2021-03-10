/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

var maxDepth = function (root) {
  // bfs and count the number of levels
  // with dfs there's a chance it would return the min depth

  if (!root) return 0;

  let depth = 0;
  let queue = [root];
  let currQueueLen = queue.length;

  while (currQueueLen > 0) {
    let curr = queue.shift();

    if (curr.left) {
      queue.push(curr.left);
    }

    if (curr.right) {
      queue.push(curr.right);
    }

    currQueueLen--;

    if (currQueueLen === 0) {
      depth++;
      currQueueLen = queue.length;
    }
  }

  return depth;
};