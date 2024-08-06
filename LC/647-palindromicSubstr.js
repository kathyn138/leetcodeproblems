// 2024 soln
// runtime: O(n^2)
var countSubstrings = function(s) {
  let res = 0;

  function checkPalindrome(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let left = i; 
    let right = i;

    checkPalindrome(left, right);
    checkPalindrome(left, right + 1);
  }

  return res;
};


// 2020 soln
/*
THIS HAS BOTH RECURSIVE AND BRUTE FORCE APPROACHES.

647. Palindromic Substrings

Given a string, your task is to count how many 
palindromic substrings in this string.

The substrings with different start indexes or 
end indexes are counted as different substrings 
even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: 
Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: 
Six palindromic strings: "a", "a", "a", "aa", 
"aa", "aaa".
 

Note:
The input string length won't exceed 1000.
*/


// RECURSIVE APPROACH

var countSubstrings = function (s) {
  let count = 0;

  function helper(s, start, end) {
    while (start >= 0 && end <= s.length && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    helper(s, i, i); // for odd length palindrome ex 'a' & 'aaa'
    helper(s, i, i + 1); // for even length palindrome
  }

  return count;
};

// BRUTE FORCE APPROACH

var countSubstrings = function (s) {
  let count = s.length;

  function checkPalindrome(t) {
    let middle = Math.floor(t.length / 2);

    for (let i = 0; i <= middle; i++) {
      if (t[i] !== t[t.length - 1 - i]) return false;
    }

    return true;
  }

  let start = 0;
  let temp = s[start];

  while (start < s.length - 1) {
    for (let i = start + 1; i < s.length; i++) {
      temp += s[i];
      let currTest = checkPalindrome(temp);

      if (currTest) {
        count++;
      }
    }

    start++;
    temp = s[start];
  }


  return count;
};