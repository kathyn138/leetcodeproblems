/*
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numsObj = {};

  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];

    // if remainder is already in numsObj, 
    // don't need to keep adding to numsObj
    // this also takes into account [3, 3]

    if (remainder in numsObj) {
      return [numsObj[remainder], i];
    }

    numsObj[nums[i]] = i;
  }
};

// python version
// def twoSum(self, nums, target):

// tracker = {}

// for i in range(len(nums)):
//   diff = target - nums[i]

//   if diff in tracker:
//     return [tracker[diff], i]

//   tracker[nums[i]] = i