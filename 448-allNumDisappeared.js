/*
448. Find All Numbers Disappeared in an Array

THIS CONTAINS MY NAIVE AND NON NAIVE (trying to 
tackle the extra requirements) SOLUTIONS

Given an array of integers where 1 ≤ a[i] ≤ n 
(n = size of array), some elements appear twice 
and others appear once.

Find all the elements of [1, n] inclusive that 
do not appear in this array.

Could you do it without extra space and in O(n) 
runtime? You may assume the returned list does 
not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

// NAIVE SOLUTION

var findDisappearedNumbers = function (nums) {
  let output = [];

  // could have used a set as well 
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]]++;
    }
  }

  for (let j = 1; j <= nums.length; j++) {
    if (!count[j]) {
      output.push(j);
    }
  }

  return output;
};

// NON NAIVE SOLUTION

var findDisappearedNumbers = function (nums) {
  let output = [];
  // can sort bc you know where the numbers should go
  // as only numbers 1 - n (length of nums) are included
  // general strategy is to sort in place with one index as 'placeholder index' 
    // [4,3,2,7,8,2,3,1]
    // nums[0] is 4, swap nums[3] = 4 and nums[0] = 7 
    // nums[0] is 7 now, swap nums[6] = 7 and nums[0] = 3
    // nums[0] is 3 now, swap nums[2] = 3 and nums[0] = 2
    // nums[0] is 2 now, swap nums[2] = 2 and nums[0] = 3
    // now nums[0] is 3 and nums[2] also 3 so we have to mark duplicate.
    // contiune same until [1,2,3,4,undefined,undefined,7,8]
  for (let i = 0; i < nums.length; i++) {
    // nums[i] !== i+1 checks if current num is not where it should be
      // eg if num[1] = 2, 2 is where it should be  
    // nums[i] !== undefined checks if current num is a repeat
    while (nums[i] !== i + 1 && nums[i] !== undefined) {
      // check at index where current number would be 
        // eg nums[i] = 3. 3 would be at index 2
      let temp = nums[nums[i] - 1];
      // if numbers are the same, make current number undefined
      if (temp === nums[i]) {
        nums[i] = undefined;
      } else {
        nums[nums[i] - 1] = nums[i];
        nums[i] = temp;
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) {
      output.push(i + 1);
    }
  }
  return output;
};