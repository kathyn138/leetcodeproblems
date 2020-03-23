/*
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum 
and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;

  // edge case of [-1]
  let maxSum = -Infinity;
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);

    //  if (nums[i] > currSum + nums[i]) {
    //   currSum = nums[i];
    // } else {
    //   currSum += nums[i];
    // }

    // if (currSum > maxSum) {
    //   maxSum = currSum;
    // } 
  }

  return maxSum;
};