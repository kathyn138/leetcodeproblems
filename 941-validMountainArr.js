/*
941. Valid Mountain Array

Given an array A of integers, return true if and only if it is 
a valid mountain array.

Recall that A is a mountain array if and only if:

- A.length >= 3
- There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
- A[i] > A[i+1] > ... > A[A.length - 1]

Example 1:
Input: [2,1]
Output: false

Example 2:
Input: [3,5,5]
Output: false

Example 3:
Input: [0,3,2,1]
Output: true
*/

var validMountainArray = function (A) {
  if (A.length < 3) return false;

  let max = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  let maxIdx = A.findIndex(num => num === max);

  // max can't be first or last element
  if (maxIdx === 0 || maxIdx === A.length - 1) return false;

  // check increase
  for (let i = 0; i < maxIdx; i++) {
    if (A[i] >= A[i + 1]) {
      return false;
    }
  }

  //check decrease
  for (let i = maxIdx + 1; i < A.length; i++) {
    // can't be bigger than max or smaller than next neighbor
    if (A[i] >= max || A[i] <= A[i + 1]) {
      return false;
    }
  }

  return true;
};
