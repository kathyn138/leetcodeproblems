// monotonic deque approach
// O(n) time and space complexity
var maxSlidingWindow = function(nums, k) {
  let res = []; 
  // storing indexes
  let deque = [];
  let left = 0; 
  let right = 0; 

  while (right < nums.length) {
    // while deque is not empty
    // pop smaller values from deque
    // remember that deque has idx, so need to wrap around nums
    // also remember that negative idx doesn't work js arrays
    while (deque.length && nums[right] > nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(right);

    // remove left value from windows if out of bounds
    if (left > deque[0]) deque.shift();

    // check if window is at least size k
    // left only incremented when window is at least size k
    if (right + 1 >= k) {
      res.push(nums[deque[0]])
      left++;
    }
    
    right++;
  }

  return res;
};

// brute force approach
// O(n^2) time complexity
var maxSlidingWindow = function(nums, k) {
  let res = []; 
  let max = -Infinity; 
  
  for (let i = 0; i <= nums.length - k; i++) {
    for (let j = 0; j < k; j++) {
      max = Math.max(max, nums[i + j]);
    }
    res.push(max);
    max = -Infinity; 
  }

  return res;
};