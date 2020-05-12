/*
912. Sort an Array

Given an array of integers nums, sort the array in ascending order.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:
1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // going to use merge sort 

  function merge(arr1, arr2) {
    let res = [];
    let a = 0;
    let b = 0;

    while (a < arr1.length && b < arr2.length) {
      if (arr1[a] < arr2[b]) {
        res.push(arr1[a]);
        a++;
      } else if (arr2[b] < arr1[a]) {
        res.push(arr2[b]);
        b++;
      } else {
        res.push(arr1[a]);
        res.push(arr2[b]);
        a++;
        b++;
      }
    }

    while (a < arr1.length) {
      res.push(arr1[a]);
      a++;
    }

    while (b < arr2.length) {
      res.push(arr2[b]);
      b++;
    }

    return res;
  }


  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));

  return merge(left, right)

};
