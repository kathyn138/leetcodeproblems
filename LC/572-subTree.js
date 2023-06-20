// cleaner soln + recursion
var isSubtree = function (root, subRoot) {
  // need helper function sameTree
  function sameTree(node, subNode) {
    if (!node && !subNode) return true;

    if (node && subNode && node.val === subNode.val) {
      return (
        sameTree(node.left, subNode.left) && sameTree(node.right, subNode.right)
      );
    }

    // catches all cases for if either is null
    // or unequal value
    return false;
  }

  if (!root) return false;

  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// brute force
var isSubtree = function (root, subRoot) {
  function dfs(node, subNode) {
    let tempStack = [[node, subNode]];

    while (tempStack.length) {
      let [currNode, subNode] = tempStack.pop();
      if (!currNode && !subNode) continue;

      if ((!currNode && subNode) || (currNode && !subNode)) {
        return false;
      }

      if (currNode.val !== subNode.val) return false;

      if (currNode.left || subNode.left)
        tempStack.push([currNode.left, subNode.left]);
      if (currNode.right || subNode.right)
        tempStack.push([currNode.right, subNode.right]);
    }

    return true;
  }

  let stack = [root];

  while (stack.length) {
    let curr = stack.pop();

    if (curr.val === subRoot.val) {
      let comparison = dfs(curr, subRoot);
      if (comparison) return true;
    }

    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return false;
};
