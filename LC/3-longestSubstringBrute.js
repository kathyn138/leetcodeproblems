/*
3. Longest Substring Without Repeating Characters

THIS SOLUTION HAS BOTH OPTIMIZED AND BRUTE FORCE APPROACHES

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
// 2023 SOLUTION

var lengthOfLongestSubstring = function(s) {
  let counter = 0; 
  let currSub = new Set();
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (currSub.has(s[right])) {
      // need to keep deleting until no longer in currSub
      // eg currSub abcbb
      currSub.delete(s[left]);
      left++;
    }

    currSub.add(s[right]);
    counter = Math.max(counter, right - left + 1);
  }

  return counter;
};

// 2020 SOLUTION
// THIS IS THE OPTIMIZED APPROACH

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0; 
  let seen = new Set();
  let start = 0; 
  let end = 0; 
  
  while (start < s.length && end < s.length) {    
    if (!seen.has(s[end])) {
      seen.add(s[end]);
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
    } else {
      // once you have a repeat, need to make window smaller
      // it is ok to have start and end on same element
      // eg pwwkew
      // only increment end when
      // everything in the window is unique
      seen.delete(s[start]);
      start++;
    }
  }
  
  return maxLength;
};

// THIS IS THE BRUTE FORCE APPROACH

// var lengthOfLongestSubstring = function (s) {
//   let letterTracker = {};
//   let maxLength = 0;
//   let subString = [];

//   // edge case empty string
//   if (s.length === 0) return 0;

//   for (let i = 0; i < s.length; i++) {
//     // letterTracker keeps track of unique substrings 

//     if (letterTracker[s[i]] === undefined) {

//       subString.push(s[i]);

//       letterTracker = {};

//       for (let j = 0; j < subString.length; j++) {
//         letterTracker[subString[j]] = j;
//       }

//       // update maxLength while subString is still unique

//       if (subString.length > maxLength) {
//         maxLength = subString.length;
//       }

//     } else {
//       // to avoid deleting the wrong character in subString
//       // enforce check that the letter we're on is the same
//       // as the first character in subString

//       // also, splice(0, 0) results in no change
//       if (subString[0] === s[i]) {
//         subString.shift();
//         delete letterTracker[s[i]];
//       } else {
//         subString.splice(0, letterTracker[s[i]] + 1);
//       }

//       // next unique subString starts with the 'repeated value' we're on 
//       subString.push(s[i]);
      
//       // items in letterTracker need to match subString
//       // this means which letters are kept and 
//       // and the indexes they are located at

//       letterTracker = {};
//       for (let j = 0; j < subString.length; j++) {
//         letterTracker[subString[j]] = j;
//       }
//     }
//   }

//   return maxLength;
// };


// to test my code 
console.log(lengthOfLongestSubstring('bbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('eeydgwdykpv')) // 7
console.log(lengthOfLongestSubstring('tmmzuxt')) // 5
console.log(lengthOfLongestSubstring('vqblqcb')) // 4


