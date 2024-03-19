// march 19, 2024 soln
var trap = function(height) {
  let water = 0; 
  let left = 0; 
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  while (left < right) {
    // want to get min of max left and max right
    // once u get min, doesn't matter what other value is
    // bc min is the limiting height
    if (maxLeft < maxRight) {
      let currWater = maxLeft - height[left];

      if (currWater > 0) water += currWater;

      left++;
      maxLeft = Math.max(maxLeft, height[left]);
    } else {
      let currWater = maxRight - height[right];

      if (currWater > 0) water += currWater;

      right--;
      maxRight = Math.max(maxRight, height[right]);
    }
  }

  return water;
};

// 2023 soln
// efficient soln
// doesn't use O(n) memory
var trap = function(height) {
  let water = 0; 
  let left = 0; 
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];

  // each water box is bound by left and right
  // each water box limited by lower border (left or right)
  // also need to account into height of black box too
  while (left < right) {
    // dont need Math.min(maxLeft, maxRight)
    // if statement sort sit out for you
    if (maxLeft <= maxRight) {
      // always exclude the first and last values
      // bc those will always have 0 water in them
      left++;
      maxLeft = Math.max(maxLeft, height[left])
      // will never be 0 bc update maxLeft first
      // if didn't update firs thten would need to check if > 0
      water += maxLeft - height[left]
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      // will never be 0 bc update maxRight first
      // if didn't update firs thten would need to check if > 0
      water += maxRight - height[right]
    }
  }

  return water;
};



// brute force soln
// uses O(n) memory

var trap = function(height) {
  let water = 0; 
  let maxLefts = [0];
  let maxRights = [0];
  let tempMax = 0; 

  // each water box is bound by left and right
  for (let i = 1; i < height.length; i++) {
    tempMax = Math.max(tempMax, height[i - 1]);
    maxLefts.push(tempMax);
  }

  tempMax = 0; 

  for (let i = height.length - 2; i >= 0; i--) {
    tempMax = Math.max(tempMax, height[i + 1]);
    maxRights.unshift(tempMax);
  }

  for (let i = 0; i < height.length; i++) {
    // each water box limited by lower border (left or right)
    // also need to account into height of black box too
    let currWater = Math.min(maxLefts[i], maxRights[i]) - height[i];
    if (currWater > 0) water += currWater;
  }

  return water;
};