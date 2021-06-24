var maxVowels = function (s, k) {
  let vowels = new Set('aeiou');
  let maxNum = 0;

  // count vowels in initial window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      maxNum++;
    }
  }

  let currVowels = maxNum;

  for (let i = 0; i < s.length - k; i++) {
    // -- bc we're losing a vowel
    // curr window is size k + 1 
    // excluding s[i]
    if (vowels.has(s[i])) currVowels--;
    if (vowels.has(s[i + k])) currVowels++;
    if (currVowels > maxNum) maxNum = currVowels;
  }

  return maxNum;
};