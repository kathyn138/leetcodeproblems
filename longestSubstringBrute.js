/*
3. Longest Substring Without Repeating Characters

(This current approach is the brute force method)

Given a string, find the length of the longest substring without 
repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
        Note that the answer must be a substring, "pwke" is a 
        subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let letterTracker = {};
  let maxLength = 0;
  let subString = [];

  // edge case empty string
  if (s.length === 0) return 0;

  for (let i = 0; i < s.length; i++) {
    // letterTracker keeps track of unique substrings 

    if (letterTracker[s[i]] === undefined) {

      subString.push(s[i]);

      letterTracker = {};

      for (let j = 0; j < subString.length; j++) {
        letterTracker[subString[j]] = j;
      }

      // update maxLength while subString is still unique

      if (subString.length > maxLength) {
        maxLength = subString.length;
      }

    } else {
      // to avoid deleting the wrong character in subString
      // enforce check that the letter we're on is the same
      // as the first character in subString

      // also, splice(0, 0) results in no change
      if (subString[0] === s[i]) {
        subString.shift();
        delete letterTracker[s[i]];
      } else {
        subString.splice(0, letterTracker[s[i]] + 1);
      }

      // next unique subString starts with the 'repeated value' we're on 
      subString.push(s[i]);
      
      // items in letterTracker need to match subString
      // this means which letters are kept and 
      // and the indexes they are located at

      letterTracker = {};
      for (let j = 0; j < subString.length; j++) {
        letterTracker[subString[j]] = j;
      }
    }
  }

  return maxLength;
};


// to test my code 
console.log(lengthOfLongestSubstring('bbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('eeydgwdykpv')) // 7
console.log(lengthOfLongestSubstring('tmmzuxt')) // 5
console.log(lengthOfLongestSubstring('vqblqcb')) // 4


