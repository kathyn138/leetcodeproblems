/*
73. Set Matrix Zeroes

THIS CONTAINS MY SOLUTIONS FOR WITH AND WITHOUT FOLLOW UP. 

Given an m x n matrix. If an element is 0, 
set its entire row and column to 0. Do it in-place.

Follow up:
Could you devise a constant space solution?

Example 1: 
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2: 
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

// WITHOUT FOLLOW UP 
// approach: use a set that keeps track of 
// which row/col 0's should appear in 

var setZeroes = function (matrix) {
  let rowCoords = new Set();
  let colCoords = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // i = row
        // j = col 

        rowCoords.add(i);
        colCoords.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowCoords.has(i) || colCoords.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// WITH FOLLOW UP 
// approach: put markers in row 0 and col 0 to track 
// which row and cols need to become 0 

var setZeroes = function (matrix) {
  let colZero = false;
  let rowZero = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // i = row
        // j = col 
        // mark first element of row as 0
        // mark first element of col as 0
        if (i === 0) {
          rowZero = true;
        }

        if (j === 0) {
          colZero = true;
        }

        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // start at 1 bc first of row/col already taken care of 
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (rowZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  if (colZero) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][0] = 0;
    }
  }

  return matrix;
};