// 2024 soln
var containsDuplicate = function(nums) {
  let tracker = new Set();

  for (let n of nums) {
    if (tracker.has(n)) return true;

    tracker.add(n);
  }

  return false;
};

// 2023 soln
var containsDuplicate = function(nums) {
  let res = new Set();

  // if already exists in res, 
  // means that current iteration is the 2nd occurrence
  for (let n of nums) {
    if (res[n] === undefined) {
      res[n] = 1;
    } else {
      return true;
    }
  }

  return false;
};