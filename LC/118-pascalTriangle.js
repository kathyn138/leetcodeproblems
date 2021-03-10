/*
118. Pascal's Triangle

Given a non-negative integer numRows, generate 
the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of 
the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

var generate = function (numRows) {
  if (numRows === 0) return [];

  let output = [];

  for (let i = 0; i < numRows; i++) {
    let currRow = [];

    for (let j = 0; j <= i; j++) {
      // each row starts and ends with 1
      if (j === 0 || j === i) {
        currRow.push(1);
      } else {
        // for the middle numbers, add previous row's 2 numbers
        currRow.push(output[i - 1][j - 1] + output[i - 1][j]);
      }
    }
    output.push(currRow);
  }

  return output;
};