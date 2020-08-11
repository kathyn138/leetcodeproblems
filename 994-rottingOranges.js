/*
994. Rotting Oranges

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally)
 to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no 
cell has a fresh orange.  If this is impossible, return -1 instead.


Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) 
is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, 
the answer is just 0.
 

Note:
- 1 <= grid.length <= 10
- 1 <= grid[0].length <= 10
- grid[i][j] is only 0, 1, or 2.
*/

var orangesRotting = function (grid) {
  // overall approach: bfs
  // need to keep track of how many freshO originally
  // rottenOranges acts as the queue

  let freshOranges = 0;
  let rottenOranges = [];
  let height = grid.length;
  let width = grid[0].length;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        rottenOranges.push([i, j]);
      }
    }
  }

  let minute = 0;

  while (freshOranges > 0 && rottenOranges.length > 0) {
    // we finish a level in bfs when finish 
    // whatever is currently in queue 
    let rottenInCurrLevel = rottenOranges.length;

    for (let i = 0; i < rottenInCurrLevel; i++) {
      let currOrange = rottenOranges.shift();
      let [y, x] = currOrange;

      if (y - 1 >= 0 && grid[y - 1][x] === 1) {
        grid[y - 1][x] = 2;
        freshOranges--;
        rottenOranges.push([y - 1, x]);
      }

      // < instead of <= bc index starts at 0
      if (y + 1 < height && grid[y + 1][x] === 1) {
        grid[y + 1][x] = 2;
        freshOranges--;
        rottenOranges.push([y + 1, x]);
      }

      if (x - 1 >= 0 && grid[y][x - 1] === 1) {
        grid[y][x - 1] = 2;
        freshOranges--;
        rottenOranges.push([y, x - 1]);
      }

      if (x + 1 < width && grid[y][x + 1] === 1) {
        grid[y][x + 1] = 2;
        freshOranges--;
        rottenOranges.push([y, x + 1]);
      }
    }

    // increment minute when finish a level
    if (rottenOranges.length > 0) minute++;
  }

  if (freshOranges > 0) return -1;
  return minute;

};