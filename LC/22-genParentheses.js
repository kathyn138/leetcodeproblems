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

// april 16, 2024 soln
var generateParenthesis = function(n) {
  let res = [];
  let stack = [];

  function backtrack(openParen, closedParen) {
    // stop when open & closed paren === n
    if (openParen === n && closedParen === n) {
      res.push(stack.join(''));
      console.log('1st if', stack)
      return;
    }

    if (openParen < n) {
      stack.push('(');
      backtrack(openParen + 1, closedParen);
      // pop to backtrack
      stack.pop();
      console.log('2nd if', stack)
    }

    // can only add closed if there are open ones to match
    // eg ((
    if (closedParen < openParen) {
      stack.push(')');
      backtrack(openParen, closedParen + 1);
      // pop to backtrack
      stack.pop();
      console.log('3rd if', stack)
    }
  }

  backtrack(0, 0);
  
  return res;
// 2020 soln
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
