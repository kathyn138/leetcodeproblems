/*
704. Binary Search

Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:

You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the 
range [-9999, 9999].
*/

// 2023 solution
var search = function(nums, target) {
  let left = 0; 
  let right = nums.length - 1; 

  while (left <= right) {
    // don't use left + right / 2 bc it can overflow
    // eg left = 50 and right = 80, mid would be 130
    // better to use algo below
    // also add left to it to start position from left
    // eg left = 50 and right = 80, without add left, 
    // mid would be 15
    let mid = left + Math.floor(right - left / 2);
    // add left separate from math.floor bc want whole number
    // and starting from left
    
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};


// 2020 solution
var search = function (nums, target) {
  return sortHelper(nums, target, 0, nums.length - 1);
};

function sortHelper(nums, target, startIdx, endIdx) {
  if (startIdx > endIdx) return -1;

  let middleIdx = Math.floor((startIdx + endIdx) / 2);

  if (nums[middleIdx] === target) return middleIdx;

  if (target > nums[middleIdx]) {
    return sortHelper(nums, target, middleIdx + 1, endIdx);
  } else {
    return sortHelper(nums, target, startIdx, middleIdx - 1);
  }
};