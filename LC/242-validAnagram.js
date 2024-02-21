/*
242. Valid Anagram

Given two strings s and t , write a function 
to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only 
lowercase alphabets.
*/

// 2024 soln
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let tracker = {};

  for (let char of s) {
    tracker[char] = (tracker[char] += 1) || 1;
  }

  for (let char of t) {
    if (!tracker[char]) return false;
    tracker[char]--; 
  }

  return true;
};


// 2023 soln
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let tracker = {};

  for (let i = 0; i < s.length; i++) {
    if (!tracker[s[i]]) {
      tracker[s[i]] = 1;
    } else {
      tracker[s[i]]++;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!tracker[t[j]]) {
      return false;
    } else {
      tracker[t[j]]--;
    }
  }

  // don't need to iterate through Object.values(tracker)
  // if s & t are same length, 
  // would only be false if t has letter not in tracker 

  return true;
};