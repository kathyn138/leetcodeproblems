/*
289. Game of Life

According to Wikipedia's article: "The Game of Life, also 
known simply as Life, is a cellular automaton devised by 
the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each 
cell has an initial state: live (represented by a 1) or 
dead (represented by a 0). Each cell interacts with its eight 
neighbors (horizontal, vertical, diagonal) using the following 
four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as 
if caused by under-population.
Any live cell with two or three live neighbors lives on 
to the next generation.
Any live cell with more than three live neighbors dies, 
as if by over-population.
Any dead cell with exactly three live neighbors becomes 
a live cell, as if by reproduction.
The next state is created by applying the above rules 
simultaneously to every cell in the current state, where 
births and deaths occur simultaneously. Given the current 
state of the m x n grid board, return the next state.

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // overall approach is to make build an updated version of board
  // at the end, copy values from res onto board

  let m = board.length;
  let n = board[0].length;
  let res = [];

  function horizontalCheck(n, i, j, board) {
    let liveNeighbors = 0;
    // check left
    if (j - 1 >= 0) {
      if (board[i][j - 1] === 1) liveNeighbors++;
    }

    // check right
    if (j + 1 < n) {
      if (board[i][j + 1] === 1) liveNeighbors++;
    }

    return liveNeighbors;
  }

  function verticalCheck(m, i, j, board) {
    let liveNeighbors = 0;

    // check top
    if (i - 1 >= 0) {
      if (board[i - 1][j] === 1) liveNeighbors++;
    }

    // check bot 
    if (i + 1 < m) {
      if (board[i + 1][j] === 1) liveNeighbors++;
    }

    return liveNeighbors;
  }

  function diagonalCheck(m, n, i, j, board) {
    let liveNeighbors = 0;

    // check top left
    if (i - 1 >= 0 && j - 1 >= 0) {
      if (board[i - 1][j - 1] === 1) liveNeighbors++;
    }

    // check top right
    if (i - 1 >= 0 && j + 1 < n) {
      if (board[i - 1][j + 1] === 1) liveNeighbors++;
    }

    // check bot left 
    if (i + 1 < m && j - 1 >= 0) {
      if (board[i + 1][j - 1] === 1) liveNeighbors++;
    }

    // check bot right 
    if (i + 1 < m && j + 1 < n) {
      if (board[i + 1][j + 1] === 1) liveNeighbors++;
    }

    return liveNeighbors;
  }

  for (let i = 0; i < m; i++) {
    let currRow = [];

    for (let j = 0; j < n; j++) {
      let alive = board[i][j] === 1 ? true : false;
      let liveNeighbors = 0;
      let horizontal = horizontalCheck(n, i, j, board);
      let vertical = verticalCheck(m, i, j, board);
      let diagonal = diagonalCheck(m, n, i, j, board);
      liveNeighbors += horizontal + vertical + diagonal;

      if (!alive) {
        if (liveNeighbors === 3) {
          currRow.push(1);
        } else {
          currRow.push(0)
        }
      } else {
        if (liveNeighbors < 2) {
          currRow.push(0);
        } else if (liveNeighbors === 2 || liveNeighbors === 3) {
          currRow.push(1);
        } else {
          currRow.push(0);
        }
      }
    }

    res.push(currRow);
  }

  // iterate through res and apply to board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = res[i][j];
    }
  }
};