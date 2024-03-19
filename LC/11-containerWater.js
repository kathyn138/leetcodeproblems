/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where 
each represents a point at coordinate (i, ai). n 
vertical lines are drawn such that the two endpoints 
of line i is at (i, ai) and (i, 0). Find two lines, 
which together with x-axis forms a container, such 
that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
*/

// march 19, 2024 soln
var maxArea = function(height) {
  let maxWater = 0; 
  let left = 0; 
  let right = height.length - 1; 

  while (left < right) {
    let limitingHeight = Math.min(height[left], height[right]);
    let currWater = (right - left) * limitingHeight;
    maxWater = Math.max(maxWater, currWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// 2023 soln
var maxArea = function(height) {
  let max = 0; 

  // two pointer
  let left = 0; 
  let right = height.length - 1; 

  while (left !== right && left < right) {
    let currLength = right - left;
    let limiterHeight = Math.min(height[left], height[right]);
    let currArea = currLength * limiterHeight;
    max = Math.max(max, currArea);
    
    // move the shorter one
    // want tallest and longest
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};


// 2020 soln
// greedy algorithm

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currArea = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};