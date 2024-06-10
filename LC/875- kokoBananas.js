// 2024 soln
var minEatingSpeed = function(piles, h) {
  // build potentialK array from [1, ..., maxPile]
  let left = 1; 
  let right = Math.max(...piles);
  let minK = right;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let time = 0; 

    for (let p of piles) {
      time += Math.ceil(p / mid);
    }

    if (time <= h) {
      minK = Math.min(minK, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minK;
};

// 2023 soln

// time complexity: O(n log m)
// space complexity: O(1) bc nothing is stored
var minEatingSpeed = function(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let k = right;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    let currTime = 0;
    
    for (let p of piles) {
      currTime += Math.ceil(p/mid);
    }

    if (currTime > h) {
      left = mid + 1;
    } else {
      k = Math.min(k, mid);
      right = mid - 1;
    }
  }

  return left;
};