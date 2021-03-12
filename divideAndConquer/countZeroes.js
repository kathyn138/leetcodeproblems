/*
countZeroes
Given an array of 1s and 0s which has all 1s first 
followed by all 0s, write a function called countZeroes, 
which returns the number of zeroes in the array.

Constraints:
Time Complexity: O(log N)

Examples:
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0
*/

// RECURSIVE APPROACH

function countZeroes(arr) { 
  if (arr[arr.length - 1] === 1) return 0; 
  if (arr[0] === 0 && arr[arr.length - 1] === 0) return arr.length; 

  function findFirst(arr, low = 0, high = arr.length - 1) {
    if (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if ((arr[mid] === 0) && (arr[mid - 1] === 1)) {
        return mid; 
      } else if (arr[mid] === 1) {
        return findFirst(arr, mid + 1)
      }
      return findFirst(arr, low, mid - 1)
    }
    return -1; 
  }

  let firstZero = findFirst(arr);
  return arr.length - firstZero;
}

// ITERATIVE APPROACH

function countZeroes(arr) { 
  if (arr[arr.length - 1] === 1) return 0; 
  if (arr[0] === 0 && arr[arr.length - 1] === 0) return arr.length; 
  let left = 0; 
  let right = arr.length - 1; 
  let firstZero; 

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if ((arr[mid] === 0) && (arr[mid - 1] === 1)) {
      firstZero = mid;
      break;
    } else if (arr[mid] === 1) {
      // if mid is 1, 0 is after
      left = mid + 1;
    } else {
      // if mid is 0, reduce right 
      // looking for first 0 
      right = mid - 1; 
    }
  }

  return arr.length - firstZero;
}