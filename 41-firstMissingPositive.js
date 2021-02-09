/*
41. First Missing Positive

Given an unsorted integer array nums, find the smallest missing positive integer.


Example 1:
Input: nums = [1,2,0]
Output: 3

Example 2:
Input: nums = [3,4,-1,1]
Output: 2

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
 
Constraints:
/ 0 <= nums.length <= 300
/ -2^31 <= nums[i] <= 2^31 - 1
*/

var firstMissingPositive = function (nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let firstPositiveIdx = 0;

  // get idx for first positive number
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) {
      firstPositiveIdx = i;
      break;
    }
  }

  // if firstPositive is not 1 
  if (sortedNums[firstPositiveIdx] !== 1) return 1;

  // check if there are any gaps in the array 
  // > 1 because could have repeats
  for (let i = firstPositiveIdx; i < sortedNums.length - 1; i++) {
    if (sortedNums[i + 1] - sortedNums[i] > 1) {
      return sortedNums[i] + 1;
    }
  }

  return sortedNums[sortedNums.length - 1] + 1;
};

// 3
console.log(firstMissingPositive([0, 2, 2, 1, 1]))