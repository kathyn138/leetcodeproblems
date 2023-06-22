var topKFrequent = function(nums, k) {
  let count = {};

  // how many times a number occurs
  for (let n of nums) {
    if (count[n]) {
      count[n]++;
    } else {
      count[n] = 1;
    }
  }

  // want to create bucket array
  // eg bucket 1 has values that occurred 1
  let freq = [].fill(undefined, 0, nums.length);

  // get key value pair of count
  // eg [1, 3] with 1 being the value that occured 3 times
  for (let [n, c] of Object.entries(count)) {
    if (freq[c]) {
      freq[c].push(n);
    } else {
      freq[c] = [n];
    }
  }

  let res = [];

  // go through freq arr in descending order
  // for each bucket, get k nums
  for (let i = freq.length - 1; i > 0; i--) {
    // if nothing in that bucket, continue
    if (!freq[i]) {
      continue; 
    }

    for (let n of freq[i]) {
      res.push(n)

      // stop when you have k elements
      if (res.length === k) return res;
    } 
  }
};