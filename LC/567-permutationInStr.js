var checkInclusion = function(s1, s2) {
  // checks that would auto return
  if (!s1.length && !s2.length) return true;
  if (!s1.length || !s2.length) return false;
  if (s1.length > s2.length) return false;
  
  // am assume that s1 could have repeats
  let tracker = {};

  for (let s of s1) {
    tracker[s] = (tracker[s] || 0) + 1;
  }

  let left = 0;
  let right = 0; 
  // length of substring to see if done w substring
  let requiredLength = s1.length;

  while (right < s2.length) {
    // if s2 char in tracker, decrease requiredLength and count in tracker
    // > 0 bc could be <= 0 for repeating letters & NaN for letters not in s1
    if (tracker[s2[right]] > 0) {
      requiredLength--;
    }

    // if 0, it means we found substring match in s2
    if (!requiredLength) return true;

    // for repeating letters
    // if brand new letter that's not in s1, will result in NaN
    tracker[s2[right]]--;
    // console.log('before shift window', tracker)

    // increment window to right by 1
    right++;

    // if window length reaches s1 length, and requiredLen > 0, 
    // it means we still haven't found substring, 
    // need to shift window to right
    if (right - left === s1.length) {
      // check if left element was part of substring
      // will know if it's >= 0 
      // if it was, return the count to reqLen
      // bc left won't be part of window anymore
      if (tracker[s2[left]] >= 0) {
        requiredLength++;
      }
      // also increase count of left element removed from window
      tracker[s2[left]]++;

      // shift window to left by decrease window size by 1
      left++;
      // console.log('after shift window', tracker)
    }
  }
  
  return false;
};