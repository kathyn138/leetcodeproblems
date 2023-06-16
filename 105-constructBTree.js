var buildTree = function(preorder, inorder) {
  // preorder: curr -> left -> right
  // inorder: left -> curr -> right

  // first value in preorder always going to be root
  // find idx of root in inorder -> mid
  // in inorder, all value to left of idx is left subtree
  // and all value to right of idx is right subtree

  // inorder tells us how to partition preorder
  // then generate subtree

  // dont need to create tree if arrays are empty
  if (!preorder.length || !inorder.length) return null;
  
  // remember to create new tree nodes
  let root = new TreeNode(preorder[0]);

  // want to point at value, not node itself
  let mid = inorder.indexOf(preorder[0]);
  
  // build subtrees
  // slice starting at idx 1 bc already used 0 for root
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};