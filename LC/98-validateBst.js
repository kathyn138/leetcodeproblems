var isValidBST = function (root) {
  function helper(node, left, right) {
    // empty bst still bst
    if (!node) return true;
    if (left >= node.val || right <= node.val) return false;

    return (
      helper(node.left, left, node.val) && helper(node.right, node.val, right)
    );
  }

  return helper(root, -Infinity, Infinity);
};
