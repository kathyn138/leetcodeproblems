/*
200. Number of Islands
Given an m x n 2d grid map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting 
adjacent lands horizontally or vertically. You may assume all 
four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:

* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 300
* grid[i][j] is '0' or '1'.
*/
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0; 

  function dfsHelper(grid, rows, cols, x, y) {
    // [x, y]
    let directions = [
            [0, -1],
      [-1, 0],    [1, 0],
            [0, 1]
    ];
    
    let stack = [[x, y]];

    while (stack.length) {
      let [currX, currY] = stack.pop();

      for (let [offsetX, offsetY] of directions) {
        let newX = currX + offsetX;
        let newY = currY + offsetY;

        // need to make sure newX and newY are within bounds
        if (newX >=0 && newX < rows && newY >=0 && newY < cols && grid[newX][newY] === "1") {
          stack.push([newX, newY]);
          // set to 0 to avoid double counting
          grid[newX][newY] = "0";
        }
      }
    }
  }

  let islands = 0;
  let rows = grid.length; 
  let cols = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let currPoint = grid[i][j];

      if (currPoint === "1") {
        // find all adjacent land for currPoint
        dfsHelper(grid, rows, cols, i, j);
        islands++;
      }
    }
  }

  return islands;
};

// 3
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))

// 1
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))