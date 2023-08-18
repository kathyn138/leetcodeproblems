var generateParenthesis = function(n) {
  let stack = [];
  let res = [];

  function backtrack(openN, closedN) {
    // base case stop when open === closed === n
    if (openN === n && closedN === n) {
      res.push(stack.join(''));
      return;
    }

    // only add open parenthesis if open < n
    if (openN < n) {
      stack.push('(');
      backtrack(openN + 1, closedN);
      stack.pop();
    }

    // only add closed parenthesis if closed < open
    if (closedN < openN) {
      stack.push(')');
      backtrack(openN, closedN + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return res;
};