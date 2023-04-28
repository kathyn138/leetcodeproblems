var kthSmallest = function (root, k) {
  let res = [];

  // bc it's bst, can do dfs
  function helper(node) {
    if (res.length === k) return;

    if (node.left) {
      helper(node.left);
    }

    res.push(node.val);

    if (node.right) {
      helper(node.right);
    }
  }

  helper(root);
  return res[k - 1];
};
