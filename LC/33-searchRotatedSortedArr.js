/*
33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is 
rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found 
in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the 
order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 2024 soln
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    // figure out which sorted side we're on, left or right

    // on sorted left side
    if (nums[left] <= nums[mid]) {
      // check which portion to look at
      // search right portion
      // if target < nums[left], means that not on left side so go right
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      // on sorted right side

      // search left portion 
      // if target > nums[right], means that not on right side so go left
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};



// 2023 soln 
var search = function (nums, target) {
  // binary search 
  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    let mid = Math.floor((tail + head) / 2);

    if (nums[mid] === target) return mid;

    // check if left side is sorted 
    if (nums[head] <= nums[mid]) {
      // check if target is on left side
      if (target <= nums[mid] && nums[head] <= target) {
        tail = mid - 1; 
      } else {
        // target is on right side
        head = mid + 1;
      }
    } else {
      // else, right side is sorted
      if (target >= nums[mid] && target <= nums[tail]) {
        // target is on right side
        head = mid + 1;
      } else {
        // target is on the left side
        tail = mid - 1; 
      }
    }
  }

  return -1;
};

// OLDER SOLUTION
var search = function (nums, target) {
  if (nums.length === 0) return -1;

  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    let mid = Math.floor((head + tail) / 2);

    if (nums[mid] === target) {
      return mid;
      // 2nd condition is for 
      // [ 7, 8, 1, 2, 3, 4] target = 1 or target = 8
    } else if ((nums[head] <= target && target < nums[mid]) ||
      (nums[head] > nums[mid] && (target < nums[mid] || nums[head] <= target))) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }

  return -1;
};