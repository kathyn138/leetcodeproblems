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