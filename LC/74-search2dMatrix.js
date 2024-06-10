// 2024 soln
var searchMatrix = function(matrix, target) {
  // do 2 binary searches, first to find searchRow then target
  let start = 0; 
  let end = matrix.length - 1;
  
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (matrix[mid][0] === target) return true;
  
    if (target < matrix[mid][0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  
  let searchRow = start + Math.floor((end - start) / 2);
  // out of bounds
  if (searchRow < 0) return false;
  
  
  let left = 0; 
  let right = matrix[0].length - 1;
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (matrix[searchRow][mid] === target) return true;
  
    if (target < matrix[searchRow][mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return false; 
  };

// 2023 soln

// O(log n) soln, two binary searches
// first is to find searchRow
// second is to find target itself within each row

var searchMatrix = function(matrix, target) {
  let top = 0; 
  let bot = matrix.length - 1;

  while (top <= bot) {
    let row = top + Math.floor(bot - top / 2);

    if (target < matrix[row][0]) {
      bot = row - 1;
    } else if (target > matrix[row][matrix[0].length - 1]) {
      top = row + 1;
    } else {
      // means that we found target
      break;
    }
  }

  // if we go through while loop, means that exceed condition
  // and go through all rows
  // none of rows contains target value
  if (top > bot) return false;

  let searchRow = top + Math.floor(bot - top / 2);
  let left = 0; 
  let right = matrix[0].length;

  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);

    if (matrix[searchRow][mid] === target) return true; 

    if (matrix[searchRow][mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};


// O(n) solution bc of first for loop
var searchMatrix = function(matrix, target) {
  let searchRow = 0; 

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === target) return true;
    if (matrix[i][0] < target) searchRow = i;
  }

  let left = 0; 
  let right = matrix[searchRow].length; 

  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);

    if (matrix[searchRow][mid] === target) return true; 

    if (matrix[searchRow][mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};