/*
977. Squares of a Sorted Array

Given an integer array nums sorted in 
non-decreasing order, return an array of 
the squares of each number sorted in 
non-decreasing order.


Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
Constraints:

* 1 <= nums.length <= 104
* -104 <= nums[i] <= 104
* nums is sorted in non-decreasing order.
*/

var sortedSquares = function (nums) {
  let squaredNums = nums.map(num => num * num);

  function helper(arr1, arr2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let res = [];

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] <= arr2[pointer2]) {
        res.push(arr1[pointer1]);
        pointer1++;
      } else {
        res.push(arr2[pointer2]);
        pointer2++;
      }
    }

    while (pointer1 < arr1.length) {
      res.push(arr1[pointer1]);
      pointer1++;
    }

    while (pointer2 < arr2.length) {
      res.push(arr2[pointer2]);
      pointer2++;
    }

    return res;
  }

  // merge sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return helper(left, right);
  }

  return mergeSort(squaredNums);
};