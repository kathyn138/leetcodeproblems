var rightSideView = function (root) {
  if (!root) return [];

  let res = [];
  // bfs at each level, take the last val

  let queue = [root];
  let queueLen = queue.length;
  let sameLevel = [];

  while (queueLen) {
    let curr = queue.shift();
    sameLevel.push(curr.val);

    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
    queueLen--;

    if (queueLen === 0) {
      let rightVal = sameLevel.pop();
      res.push(rightVal);
      queueLen = queue.length;
      sameLevel = [];
    }
  }

  return res;
};
