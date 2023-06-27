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