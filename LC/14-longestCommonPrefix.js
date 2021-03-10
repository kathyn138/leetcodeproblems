/*
14. Longest Common Prefix

Write a function to find the longest common prefix 
string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let res = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        // bc only want prefix
        // want to return asap when not matching
        // ["aca", "cba"] should return ""
        // "a" at the end isn't a prefix
        return res;
      }
    }

    res += strs[0][i];
  }

  return res;
};
