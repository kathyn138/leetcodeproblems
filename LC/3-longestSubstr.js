// march 25, 2024 soln
var lengthOfLongestSubstring = function(s) {
  let seen = new Set();
  let maxLen = 0; 
  let left = 0; 

  for (let right = 0; right < s.length; right++) {
    // handles when s[right] somewhere in substr
    // eg abcbb
    // shift left side of sliding window over
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};