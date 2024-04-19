// april 18, 2024 soln
// time complexity: O(n)
var dailyTemperatures = function(temperatures) {
  // populate with 0 to make it easier
  // will keep track of indexes 
  let answer = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    //cant assign prevTemp as variable bc infinite loop
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let prevIdx = stack.pop();
      // use i and prevIdex to count how many days passed
      let dayDiff = i - prevIdx;
      answer[prevIdx] = dayDiff;
    }
    // if currTemp < prevTemp, add to stack
    // creates monotonic decreasing stack
    // also add to stack when finish while loop so currTemp would become the next prevTemp
    stack.push(i);
  }

  return answer;
};

// aug 2023 soln
var dailyTemperatures = function(temperatures) {
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