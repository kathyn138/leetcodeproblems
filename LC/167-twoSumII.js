// march 18, 2024 soln
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    let curr = numbers[left] + numbers[right];

    if (curr === target) {
      return [left + 1, right + 1];
    } else if (curr > target) {
      right--;
    } else {
      left++;
    }
  }
};

// 2023 soln
var twoSum = function(numbers, target) {
  let left = 0; 
  let right = numbers.length - 1;

  while (left !== right && left < right) {
    let currSum = numbers[left] + numbers[right];

    if (currSum === target) return [left + 1, right + 1];

    if (currSum < target) {
      left++;
    } else {
      right--;
    }
  }
};