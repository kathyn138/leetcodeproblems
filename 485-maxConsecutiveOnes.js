/*
485. Max Consecutive Ones

Given a binary array, find the maximum number 
of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last 
three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.

Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer 
and will not exceed 10,000
*/


var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let tempCount = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) {
      tempCount++;

      if (tempCount > maxCount) {
        maxCount = tempCount;
      }
    } else {
      tempCount = 0;
      left = right;
    }
  }

  return maxCount;
};