/*
62. Unique Paths

// My current solution works for the examples but not bigger cases
(see below)

A robot is located at the top-left corner of a m x n grid.

The robot can only move either down or right at any point in time. 
The robot is trying to reach the bottom-right corner of the grid.

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach 
the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Example 3:
Input: m = 7, n = 3
Output: 28

Example 4:
Input: m = 3, n = 3
Output: 6
 
Constraints:

/ 1 <= m, n <= 100
/ It's guaranteed that the answer will be less than or equal to 2 * 10^9.
*/
var uniquePaths = function (m, n) {
  let visited = new Set();
  let finishCoordinates = [m - 1, n - 1];
  let stack = [[[0, 0], '']];

  while (stack.length) {
    let [currCoordinates, currPath] = stack.pop();

    // check if can move down 
    // m = row
    if (currCoordinates[0] + 1 < m) {
      let newCoordinate = [currCoordinates[0] + 1, currCoordinates[1]];
      let newPath = currPath + 'D';
      stack.push([newCoordinate, newPath]);
    }

    // check if can move right
    // n = col 
    if (currCoordinates[1] + 1 < n) {
      let newCoordinate = [currCoordinates[0], currCoordinates[1] + 1];
      let newPath = currPath + 'R';
      stack.push([newCoordinate, newPath]);
    }

    // check if robot at finishCoordinates
    if (currCoordinates[0] === finishCoordinates[0] && currCoordinates[1] === finishCoordinates[1]) {
      if (!visited.has(currPath)) {
        visited.add(currPath);
      }
    }
  }

  return visited.size;
};

// does not work for bigger cases such as this 
console.log(uniquePaths(23, 12))