/*
22. Generate Parentheses

Given n pairs of parentheses, write a function to 
generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

var generateParenthesis = function (n) {
  if (n === 0 || n < 0) return [];

  let res = [];

  function helper(left, right, currSet) {
    if (left === 0 & right === 0) {
      res.push(currSet);
    }

    // want to handle left first
    if (left) {
      helper(left - 1, right, currSet + '(');
    }

    if (right > left) {
      helper(left, right - 1, currSet + ')');
    }
  }

  helper(n, n, '')
  return res;
};
