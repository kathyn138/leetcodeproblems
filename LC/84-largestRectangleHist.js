 // runtime: O(n)
 var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let start = i;

    // rm when height is < top of stack bc limited by shorter height
    // also update start value bc can extend to the left
    // ie encapsulate the other values as the limiter height
    while (stack.length && heights[i] <= stack[stack.length - 1][1]) {
      let [prevStart, prevHeight] = stack.pop();
      start = prevStart;
      let calc = prevHeight * (i - prevStart);
      maxArea = Math.max(maxArea, calc);
    }

    stack.push([start, heights[i]]);
  }

  // if remaining in stack, means that it extends to end of histogram
  // need to see if maxArea there too
  while (stack.length) {
    let [prevStart, prevHeight] = stack.pop();
    let calc = prevHeight * (heights.length - prevStart);
    maxArea = Math.max(maxArea, calc);
  }

  return maxArea;
};