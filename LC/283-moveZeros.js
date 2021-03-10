/*
283. Move Zeroes

Given an array nums, write a function to move all 0's t
o the end of it while maintaining the relative order 
of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
  if (nums.length === 0) return nums; 
  
  // general approach: 
  // iterate through nums 
  // count number of 0's
  // swap non zero numbers 
  // add in 0's at the end 
  
  // nonZeroPointer keeps track of where non zero numbers 
  // should move to
  
  let zeros = 0; 
  let nonZeroPointer = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeros++;
    } else {
      nums[nonZeroPointer] = nums[i];
      nonZeroPointer++; 
    }
  }
  
  for (let j = 1; j <= zeros; j++) {
    nums[nums.length - j] = 0;
  }
  
  return nums;
};