/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

var isValid = function (s) {
  let key = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  let compareArr = [];

  for (let i = 0; i < s.length; i++) {
    // start with (, {, [ since s starts with them 
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      compareArr.push(s[i]);
    } else {
      if (compareArr[compareArr.length - 1] === map[s[i]]) {
        // empty arr as we go 
        // valid subexpressions are mirrors of each other
        // eg ([])
        compareArr.pop();
      } else {
        return false;
      }
    }
  }

  // if entire string is valid
  // compareArr should be empty at the end

  return compareArr.length === 0;
};