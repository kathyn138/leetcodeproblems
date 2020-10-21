/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]

Note:
- Each element in the result must be unique.
- The result can be in any order.
*/

var intersection = function (nums1, nums2) {
  let uniqueNums1 = new Set();
  let uniqueNums2 = new Set();

  for (let num in nums1) {
    if (!uniqueNums1.has(nums1[num])) {
      uniqueNums1.add(nums1[num]);
    }
  }

  for (let num in nums2) {
    if (!uniqueNums2.has(nums2[num])) {
      uniqueNums2.add(nums2[num]);
    }
  }

  let compareArr;
  let output = [];

  // better to iterate through smaller array

  if (uniqueNums1.size >= uniqueNums2.size) {
    compareArr = Array.from(uniqueNums1);

    for (let num in compareArr) {
      if (uniqueNums2.has(compareArr[num])) {
        output.push(compareArr[num]);
      }
    }
  } else {
    compareArr = Array.from(uniqueNums2);

    for (let num in compareArr) {
      if (uniqueNums1.has(compareArr[num])) {
        output.push(compareArr[num]);
      }
    }
  }

  return output;
};
