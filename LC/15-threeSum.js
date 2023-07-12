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