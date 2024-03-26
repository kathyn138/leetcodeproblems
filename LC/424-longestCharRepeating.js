// march 25, 2024 soln
// runtime: O(26 * n)

 // approach: find mostFreq char in substr 
 //and see how much u need to replace in that substr
 var characterReplacement = function(s, k) {
  let count = {};
  let left = 0; 
  let maxLen = 0; 

  // cant do while loop and have right = 0 bc
  // while loop woul d be left < right and wouldnt run
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;

    let freq = Object.values(count);
    let maxFreq = Math.max(...freq);

    // cant assign variable to statement bc wont update
    while (right - left + 1 - maxFreq > k) {
      count[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};

// 2023 soln
var characterReplacement = function(s, k) {
  let counts = {};
  let longest = 0; 
  let left = 0; 

  for (let right = 0; right < s.length; right++) {
    // initialize or add to exisiting entry
    counts[s[right]] = (counts[s[right]] || 0) + 1;

    let freq = Object.values(counts)
    let maxFreq = Math.max(...freq);
    while (right - left + 1 - maxFreq > k) {
      counts[s[left]]--;
      left++;
    }

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};