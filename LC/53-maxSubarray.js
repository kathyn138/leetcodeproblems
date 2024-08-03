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

// 2024 soln w explanation 

// runtime: O(n)
// at each value, see if currsum + value, or value alone is greater
// eg if currsum + value is negative and value alone is positive, drop the rest

// cant do 2 pointers with left at 0 and right at end bc
// "If you only compare curr_sum with values at left or right, you’re missing out on the possibility of larger subarrays that might extend beyond these pointers. Simply comparing and updating based on these values doesn’t account for the possibility of larger subarrays that include parts of the array before left or after right. To correctly find the maximum sum subarray, you need to consider subarrays that might start before the left pointer and end beyond the right pointer. 
var maxSubArray = function(nums) {
  let currSum = nums[0];
  let maxSum = currSum;

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};



// 2021 soln
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};