/*
119. Pascal's Triangle II

Given a non-negative index k where k ≤ 33, 
return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of 
the two numbers directly above it.

Example:
Input: 3
Output: [1,3,3,1]
*/

var getRow = function (rowIndex) {
  let initial = [1];
  let temp = [];

  for (let i = 0; i < rowIndex; i++) {
    temp = [1]

    for (let j = 0; j < initial.length - 1; j++) {
      temp.push(initial[j] + initial[j + 1]);
    }

    temp.push(1);
    initial = temp;
  }

  return initial;
};