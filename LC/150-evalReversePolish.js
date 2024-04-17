// april 16, 2024 soln
var evalRPN = function(tokens) {
  // create a stack and pop last two integers when u see operator
  let operators = new Set(['+', '-', '*', '/']);
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!operators.has(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      let second = stack.pop();
      let first = stack.pop();
      //Math.trunc() to truncate towards 0
      // Math.floor() rounds to -Infinity
      // eval() takes a str and returns evaluates str as math function
      // eval needs space between variables, ie 2--3 would throw error
      let res = Math.trunc(eval(`${first} ${tokens[i]} ${second}`));
      
      stack.push(res);
    }
  }

  return stack.pop();
};

// 2023 soln
var evalRPN = function(tokens) {
  let stack = [];
  let arith = ['+', '-', '*', '/'];
  let arithSet = new Set();
  arith.forEach(i => arithSet.add(i));

  for (let i = 0; i < tokens.length; i++) {
    if (!arithSet.has(tokens[i])) {
      stack.push(tokens[i]);
    } else {
      let b = stack.pop();
      let a = stack.pop();
      console.log(a)
      let currRes = parseInt(eval(`${a} ${tokens[i]} ${b}`), 10);
      stack.push(currRes);
    }
  }

  return stack;
};