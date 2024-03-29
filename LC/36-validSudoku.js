/*
36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the 
filled cells need to be validated according to the 
following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain 
the digits 1-9 without repetition.

Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1: 
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the 
top left corner being modified to 8. Since there are two 8's 
in the top left 3x3 sub-box, it is invalid.

Constraints:

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit or '.'.
*/

// 2023 solution
// more concise and divides board into subboxes with coordinates 0 - 3
var isValidSudoku = function(board) {
  // divide board into 9 subboxes with coordinates that range 0 - 3
  // coordinates is x then y 
  // eg top left is 0-0 and bottom right is 2-2
  let boxes = {
  '0-0': new Set(),
  '1-0': new Set(),
  '2-0': new Set(),
  '0-1': new Set(),
  '1-1': new Set(),
  '2-1': new Set(),
  '0-2': new Set(),
  '1-2': new Set(),
  '2-2': new Set(),
  };

  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let y = Math.floor(i / 3);

    for (let j = 0; j < 9; j++) {
      let currHorVal = board[i][j];
      let currVertVal = board[j][i];
      let x = Math.floor(j / 3);
      let currBox = `${x}-${y}`;
      

      if (row.has(currHorVal) || col.has(currVertVal) || boxes[currBox].has(currHorVal)) return false; 

      if (currHorVal !== ".") {
        row.add(currHorVal);
        boxes[currBox].add(currHorVal);
      } 

      if (currVertVal !== ".") {
        col.add(currVertVal);
      }
    }
  }

  return true;
};

// 2021 solution
var isValidSudoku = function (board) {
  // function to check 3x3 box
  function checkBox(board, startCol, startRow) {
    let box = new Set();

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] !== '.') {
          if (box.has(board[i][j])) {
            return false
          };

          box.add(board[i][j]);
        }
      }
    }
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    let row = new Set();
    let col = new Set();

    for (let j = 0; j < board[i].length; j++) {
      // check if already in row 
      if (board[i][j] !== '.') {
        if (row.has(board[i][j])) {
          return false
        }


        row.add(board[i][j]);
      }

      // check if already in col 
      if (board[j][i] !== '.') {
        if (col.has(board[j][i])) {
          return false
        };
      }

      col.add(board[j][i]);
    }
  }

  // check if in 3x3 box
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!checkBox(board, i * 3, j * 3)) return false;
    }
  }

  return true;
};
