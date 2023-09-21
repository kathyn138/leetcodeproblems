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
