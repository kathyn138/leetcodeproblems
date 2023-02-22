var diameterOfBinaryTree = function (root) {
  // dfs, for each node calculate the max depth of left and right side
  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    // update diameter
    maxDiameter = Math.max(maxDiameter, left + right);

    // + 1 to include current node itself
    return 1 + Math.max(left, right);
  }

  dfs(root);

  return maxDiameter;
};
