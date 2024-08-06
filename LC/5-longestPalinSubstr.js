// 2024 soln
// for longest is odd length palindrome: for each letter, treat it as if it's the middle
// edge case: longest is even length palindrome
// runtime: O(n^3) bc of slice + for each letter we have an inner loop]

var longestPalindrome = function(s) {
  let longest = '';

  function checkPalindrome(left, right) {
    // only want to do while loop while valid palindrome
    // dont need to have check for s[left] === s[right] on inside of loop
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > longest.length) longest = s.slice(left, right + 1);
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let left = i; 
    let right = i;

    // odd length palindrome
    checkPalindrome(left, right);

    // even length palindrome
    // right + 1 creates even length substr
    checkPalindrome(left, right + 1)
  }

  return longest;
};

// 2023 soln

// overall approach is that each char acts as middle
// and we work our way outwards
// left and right should be equal if palindrome
// also need to take into account odd and even palindromes
// even is edge case
// time complexity: O(n^2)
// space complexity: O(n)
var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let res = '';
  let resLen = 0;

  let str = '';

  for (let char of s) {
    str += char.toLowerCase();
  }

  function checkLongestPalin(a, b) {
    while (a >= 0 && b < s.length && str[a] === str[b]) {
      if (b - a + 1 > resLen) {
        resLen = b - a + 1;
        res = s.slice(a, b + 1);
      }
      a--;
      b++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let l = i;
    let r = i;

    // odd length palindrome
    checkLongestPalin(l, r);

    // even length palindrome
    checkLongestPalin(l, r + 1);
  }

  return res;
};
