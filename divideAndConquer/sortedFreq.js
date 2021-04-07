/*
sortedFrequency
Given a sorted array and a number, write a 
function called sortedFrequency that counts 
the occurrences of the number in the array

Constraints:
Time Complexity: O(log N)

Examples:
sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1
*/

// overall approach is to find first idx and last idx
// use indexes to calculate number of occurrences


function findFirst(arr, num, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // mid can be 0 when left and right === 0
    if (( mid === 0 || arr[mid - 1] < num) && arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      return findFirst(arr, num, mid + 1, right);
    } else {
      return findFirst(arr, num, left, mid - 1);
    }
  }
  // if can't find first occuring 
  return -1; 
}

function findLast(arr, num, left = 0, right = arr.length - 1) {
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
      return mid; 
    } else if (arr[mid] > num) {
      return findLast(arr, num, left, mid - 1);
    } else {
      return findLast(arr, num, mid + 1, right);
    }
  }
}

function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx; 
  let lastIdx = findLast(arr, num);

  return lastIdx - firstIdx + 1;
}