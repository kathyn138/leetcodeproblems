var goodNodes = function(root) {
  // recursion dfs

  function dfs(node, maxVal) {
    if (!node) return 0;

    maxVal = Math.max(maxVal, node.val);

    // res is the current node, eg root
    // 1 + left + right
    let res;
    if (maxVal > node.val) {
      res = 0;
    } else {
      res = 1;
    }

    res += dfs(node.left, maxVal)
    res += dfs(node.right, maxVal);

    return res;
  }

  return dfs(root, root.val);
};