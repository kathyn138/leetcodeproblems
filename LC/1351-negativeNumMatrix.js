/*
1351. Count Negative Numbers in a Sorted Matrix

Given a m x n matrix grid which is sorted in non-increasing 
order both row-wise and column-wise, return the number of 
negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3

Example 4:
Input: grid = [[-1]]
Output: 1

Constraints:

* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 100
* -100 <= grid[i][j] <= 100
*/

var countNegatives = function (grid) {
  let count = 0;

  // general approach is binary search 

  function findFirst(currRow, left = 0, right = currRow.length - 1) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (currRow[mid] < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // works bc if no negative num,
    // left will be currRow.length
    // before while loop ends, left = currRow.length - 1
    // it ends bc left becomes currRow.length 
    return left;
  }

  for (let i = 0; i < grid.length; i++) {
    let currRow = grid[i];

    if (currRow[0] < 0) {
      count += currRow.length;
    } else {
      let firstNegativeIdx = findFirst(currRow);
      count += currRow.length - firstNegativeIdx;
    }
  }

  return count;
};