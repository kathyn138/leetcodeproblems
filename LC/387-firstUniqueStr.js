/*
387. First Unique Character in a String

Given a string, find the first non-repeating character 
in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase 
English letters.
*/

var firstUniqChar = function (s) {
  let letterTracker = {};

  for (let j = 0; j < s.length; j++) {
    if (!letterTracker[s[j]]) {
      letterTracker[s[j]] = 1;
    } else {
      letterTracker[s[j]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (letterTracker[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};