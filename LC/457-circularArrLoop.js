// time complexity: O(n^2) bc at each element, try to find its cycle with remaining elements
// space complexity: O(1)
var circularArrayLoop = function(nums) {
  if (nums.length <= 1) return false;

  // cycle can only go in one direction,
  // not forward and backward
  function getNextPosition(arr, idx, isForward) {
    let direction = arr[idx] >= 0;

    // eg if direction false, isForward needs to also be false
    // ie both going backwards
    if (direction !== isForward) return -1;

    let nextIdx = (arr[idx] + idx) % arr.length;
    // eg [-2, 2, 3]
    // at idx 0, nextIdx = -2
    // want to have it at valid index so add arr length
    if (nextIdx < 0) nextIdx += arr.length

    // 1 element loop,
    // does not count as cycle
    if (nextIdx === idx) return -1;

    return nextIdx;
  }

  // visit each element
  // at each element, 
  // try to find cycle from it with all elements
  for (let i = 0; i < nums.length; i++) {
    let slow = i; 
    let fast = i; 

    // check if current idx is moving forward
    let isForward = nums[i] > 0 ? true : false;

    while (true) {
      // increment slow and fast
      // check if it does not meet loop conditions
      slow = getNextPosition(nums, slow, isForward);
      if (slow === -1) break;

      fast = getNextPosition(nums, fast, isForward);
      if (fast === -1) break;

      fast = getNextPosition(nums, fast, isForward);
      if (fast === -1) break;

      // if there is cycle, slow and fast will meet
      if (slow === fast) return true
    }
  }

  return false;
};