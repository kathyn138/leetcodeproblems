ar dailyTemperatures = function(temperatures) {
  // time complexity: O(n)
  // auto populate output with 0 to not have to do it later
  let output = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    // while current temp is more than top of stack
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let prev = stack.pop();
      let tempDays = i - prev; 
      output[prev] = tempDays;
    }

    // if current temp is less than top of stack, add to stack
    // creates monotonic decreasing stack
    stack.push(i);
  }

  return output;
};