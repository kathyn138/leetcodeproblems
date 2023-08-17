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


// 2023 approach
var isValid = function(s) {
  if (s.length === 1) return false;

  let pairs = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];

    if (pairs[currChar]) {
      stack.push(currChar)
    } else {
      let last = stack.pop();

      if (pairs[last] !== currChar) return false;
    }
  }

  return stack.length === 0;
};



// comparison approach
// 2021 approach
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

// stack approach
// stack keeps track of the open brackets

var isValid = function(s) {
  if (s.length === 1) return false; 
  
  let pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  let stack = [];
  
  for (char of s) {
    if (pairs[char]) {
      stack.push(char);
      continue; 
    }
    
    let lastChar = stack.pop();
    if (pairs[lastChar] !== char) return false; 
  }
  
  return stack.length === 0;
};