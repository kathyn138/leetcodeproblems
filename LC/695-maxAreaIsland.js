/*
695. Max Area of Island

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's 
(representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no 
  island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island 
must be connected 4-directionally.

Example 2:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.

Note: The length of each dimension in the given grid does not exceed 50.
*/

var maxAreaOfIsland = function (grid) {
  // only want to bfs when encounter a 1

  function bfs(i, j, grid) {
    let area = 0;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [[i, j]];

    while (queue.length) {
      let queueLen = queue.length;

      // only things that are 1's are in the queue
      area += queueLen;

      for (let i = 0; i < queueLen; i++) {
        let curr = queue.shift();

        // explore 4 directions
        for (let dir of directions) {
          let newRow = curr[0] + dir[0];
          let newCol = curr[1] + dir[1];

          // if in bounds and 1, add to queue
          if (newRow < grid.length && newRow >= 0 && newCol < grid[0].length && newCol >= 0) {
            if (grid[newRow][newCol] === 1) {
              // set to 0 so to not add it to queue twice
              grid[newRow][newCol] = 0;
              queue.push([newRow, newCol]);
            }
          }
        }
        // mark as 0 to mark as visited
        grid[curr[0]][curr[1]] = 0;
      }
    }
    return area;
  }

  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let area = bfs(i, j, grid);
        maxArea = Math.max(area, maxArea);
      }
    }
  }

  return maxArea;
};