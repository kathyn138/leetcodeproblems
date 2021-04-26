var findSecondMinimumValue = function(root) {
  let min1 = root.val; 
  let min2 = Infinity;
  // dfs, stack, lifo
  
  let stack = [root];
  
  while (stack.length) {
    let curr = stack.pop();
    // desired min2 is between min1 and min2
    if (min1 < curr.val && curr.val < min2) min2 = curr.val;
    
    if (curr.left) stack.push(curr.left);
    
    if (curr.right) stack.push(curr.right);
  }
  
  return min2 === Infinity ? -1 : min2;
};