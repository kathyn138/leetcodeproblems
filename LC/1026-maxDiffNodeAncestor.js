/*
1026. Maximum Difference Between Node and Ancestor

Given the root of a binary tree, find the maximum value 
V for which there exist different nodes A and B where 
V = |A.val - B.val| and A is an ancestor of B.

A node A is an ancestor of B if either: any child of 
A is equal to B, or any child of A is an ancestor of B.

Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: We have various ancestor-node differences, 
some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 
7 is obtained by |8 - 1| = 7.
*/

var maxAncestorDiff = function(root) {
  if (!root) return 0; 
  
  // dfs
  
  let stack = [[[], root]];
  let maxDiff = 0; 
  
  while (stack.length) {
    let [visited, currNode] = stack.pop();
    let currVal = currNode.val;
    
    let newVisited = [...visited];
    newVisited.push(currVal);
    
    for (let i = 0; i < newVisited.length; i++) {
      if (Math.abs(newVisited[i] - currVal) > maxDiff) {
        maxDiff = Math.abs(newVisited[i] - currVal);
      }
    }
    
    if (currNode.left) {
      stack.push([newVisited, currNode.left]);
    }
    
    if (currNode.right) {
      stack.push([newVisited, currNode.right]);
    }
  }
  
  return maxDiff;
};
