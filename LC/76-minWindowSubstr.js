var minWindow = function(s, t) {
  if (t === "") return "";
  if (s === t) return s;
  if (t.length > s.length) return "";

  let trackerT = {};
  // populate tracker

  for (let char of t) {
    trackerT[char] = (trackerT[char] || 0) + 1;
  }

  // unique values only bc
  // only increment haveLen
  // when obj values match
  // eg b: 2, only update haveLen when there's 2 b's
  let needLen = Object.values(trackerT).length;
  let haveLen = 0; 
  let left = 0; 
  let resLen = Infinity;
  let idx = [];

  let window = {};
  
  for (let right = 0; right < s.length; right++) {
    if (trackerT[s[right]]) {
      window[s[right]] = (window[s[right]] || 0) + 1;
      if (window[s[right]] === trackerT[s[right]]) haveLen++;
    }

    // means that we have the needed letters
    // move left pointer 
    while (haveLen === needLen) {
      let currLen = right - left + 1;

      if (currLen < resLen) {
        resLen = currLen;
        idx[0] = left;
        idx[1] = right;
      }

      window[s[left]]--;
      if (trackerT[s[left]]) {
        if (window[s[left]] < trackerT[s[left]]) haveLen--;
      }
      left++;
    }
  }
  console.log('res', resLen)
  console.log('left', left)

  if (resLen === Infinity) return "";
  // if (reqLen > 0) return "";

  return s.slice(idx[0], idx[1] + 1);

};