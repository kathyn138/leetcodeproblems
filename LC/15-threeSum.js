// march 18, 2024 soln
var threeSum = function(nums) {
  // sort to make it easier
  // similar to two sum ii
  let sortedNums = nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    // if > 0, will never = 0
    if (sortedNums[i] > 0) break;
    // need to account for if same value
    // eg [0, 0, 0]
    if (sortedNums[i] === sortedNums[i - 1]) continue;

    let target = 0 - sortedNums[i];
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      let currSum = sortedNums[left] + sortedNums[right];

      if (currSum === target) {
        res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        // without this, it'll infinite loop
        left++;
        right--;

        // need to account for if left same as left - 1
        while ((sortedNums[left] === sortedNums[left - 1]) && left < right) {
          left++;
        }
      } else if (currSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
};

// 2023 soln
var threeSum = function(nums) {
  // remember to pass in callback
  // otherwise will sort [1, 100, 2]
  let sorted = nums.sort((a, b) => a - b);
  let res = [];

  for (let a = 0; a < nums.length - 2; a++) {
    if (sorted[a] > 0) break;
    if (sorted[a] === sorted[a - 1]) continue;

    let b = a + 1; 
    let c = nums.length - 1;

      while (b < c) {
        let tempSum = sorted[a] + sorted[b] + sorted[c];

        if (tempSum === 0) {
          res.push([sorted[a], sorted[b], sorted[c]]);

          b++;
          c--;
          // to skip duplicates
          while (sorted[b] === sorted[b - 1]) b++;
        } else if (tempSum > 0) {
          c--;
        } else {
          b++;
        }
    }
  }

  return res;
};