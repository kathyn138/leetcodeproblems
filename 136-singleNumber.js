/*
136. Single Number

Given a non-empty array of integers, every element 
appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function (nums) {
  // 0 is current value on first iteration
  // in english, 
  // go thru arr and if see new val, include into prev
  // else, remove from prev 
  return nums.reduce((prev, curr) => prev ^ curr, 0);
};