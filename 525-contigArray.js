/*
525. Contiguous Array

Given a binary array, find the maximum length 
of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous 
subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous 
subarray with equal number of 0 and 1.
Note: The length of the given binary array will not 
exceed 50,000.
*/

var findMaxLength = function (nums) {
  // {count: index}
  let tracker = { 0: -1 };
  let count = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    } else {
      count++;
    }

    // there's an even number of 0's and 1's 
    // when count is the same / appears again
    if (tracker[count] === undefined) {
      tracker[count] = i;
    } else {
      // i - tracker[count] is currLen
      if (i - tracker[count] > maxLen) {
        maxLen = i - tracker[count];
      }
    }
  }

  return maxLen;
};

// to test my code 
console.log(findMaxLen([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1]))
// 8
