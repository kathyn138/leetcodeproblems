// april 2, 2024 soln

// overall approach: use left and right pointers to calculate window
// time complexity: O(m + n), m = s.length and n = t.length
// worse case is traversing both strings once
// space complexity: O(n), n = t.length
var minWindow = function (s, t) {
  if (!t.length) return '';
  let minWindow = '';

  let left = 0;
  let right = 0;
  let reqLen = t.length;
  let minWindowLen = Infinity;

  let tracker = {};

  // track chars in t and frequency
  for (let char of t) {
    tracker[char] = (tracker[char] || 0) + 1;
  }

  while (right < s.length) {
    if (tracker[s[right]] > 0) reqLen--;
    tracker[s[right]]--;

    right++;

    // make window smaller from left
    while (!reqLen) {
      // new min window if curr window smaller than min window so far
      if (right - left - 1 < minWindowLen) {
        minWindowLen = right - left - 1;
        minWindow = s.slice(left, right);
      }

      tracker[s[left]]++;

      // for if s[left] is in t
      // don't do >= bc already incremeneted tracker[s[left]]
      // if freq of tracker[s[left]] becomes positive after increment,
      // then we know it was part of t
      if (tracker[s[left]] > 0) reqLen++;
      left++;
    }
  }

  return minWindow;
};

// 2023 soln
var minWindow = function (s, t) {
  if (t === '') return '';
  if (s === t) return s;
  if (t.length > s.length) return '';

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
  console.log('res', resLen);
  console.log('left', left);

  if (resLen === Infinity) return '';
  // if (reqLen > 0) return "";

  return s.slice(idx[0], idx[1] + 1);
};
