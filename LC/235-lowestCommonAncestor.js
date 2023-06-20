var lowestCommonAncestor = function (root, p, q) {
  // lowest as in most bottom
  let curr = root;

  while (curr) {
    if (p.val > curr.val && q.val > curr.val) {
      curr = curr.right;
    } else if (p.val < curr.val && q.val < curr.val) {
      curr = curr.left;
    } else {
      return curr;
    }
  }
};
