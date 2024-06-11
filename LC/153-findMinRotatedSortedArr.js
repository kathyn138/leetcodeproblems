// 2024 soln
var findMin = function(nums) {
  let left = 0; 
  let right = nums.length - 1;
  let min = nums[0];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < min) {
      min = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
};

// 2023 soln
var findMin = function(nums) {
  let min = Infinity;

  let left = 0; 
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    min = Math.min(min, nums[mid]);

    // right side has min
    // eg [4,5,6,7,0,1,2]
    // mid is part of left sorted portion so look right
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    // left side has min
    // eg [11,13,15,17]
    // mid is part of the right sorted portion so look left
    } else {
      right = mid - 1;
    }
  }

  return min;
};