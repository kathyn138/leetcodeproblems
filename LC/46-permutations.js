/*
46. Permutations

Given a collection of distinct integers, return all 
possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function (nums) {
  let results = [];

  function _permute(current, remaining) {
    if (remaining.length < 1) {
      results.push(current.slice());
    } else {
      for (let i = 0; i < remaining.length; i++) {
        current.push(remaining[i]);
        let newRemaining = remaining.slice();
        newRemaining.splice(i, 1);
        _permute(current, newRemaining);
        current.pop();
      }
    }
  }

  _permute([], nums)
  return results;
};

