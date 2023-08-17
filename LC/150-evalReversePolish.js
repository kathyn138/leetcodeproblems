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