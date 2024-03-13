// 2024 soln
var longestConsecutive = function(nums) {
  // want to find first number of a sequence
  // first won't have a left neighbor
  // after u find it, want to check how long sequence goes on for

  let numTracker = new Set(nums);
  let longest = 0;

  for (let n of nums) {
    let currLen = 0;
    // if does not have (n - 1), it means that n is start of sequence
    // bc no left neighbor
    if (!numTracker.has(n - 1)) {

      // checks for following numbers
      while (numTracker.has(n + currLen)) {
        currLen++;
      }

      longest = Math.max(longest, currLen);
    }
  }

  return longest;
};

// 2023 soln
var longestConsecutive = function(nums) {
  if (!nums.length) return 0;
  let longest = 0;

  let numsSet = new Set(nums);

  for (let n of nums) {
    // if no n - 1, it means n is beginning of a sequence
    if (!numsSet.has(n - 1)) {
      let currLength = 0; 

      // find consecutive values
      // currLen is incrementor
      while (numsSet.has(n + currLength)) {
        currLength++;
      }

      // reached end of consecutive sequence
      longest = Math.max(longest, currLength);
    }
  }

  return longest;
};