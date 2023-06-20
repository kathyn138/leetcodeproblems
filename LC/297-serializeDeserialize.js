var serialize = function(root) {
  if (!root) return '';

  // dfs, preorder
  // if both children nodes are n, finished subtree
  let stack = [];

  function dfs(node) {
    if (!node) {
      stack.push('n');
      return;
    }

    stack.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return stack.join(',');  
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data.length) return null;

  let vals = data.split(',');
  let i = 0; 

  function dfs() {
    if (vals[i] === 'n') {
      i++;
      return null;
    } 

    // TreeNode takes integers, not str
    let node = new TreeNode(Number(vals[i]));
    i++;

    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
};