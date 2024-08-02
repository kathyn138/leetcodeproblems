// approach O(n log n):
 // 1) sort by start --> O(n log n)
 // 2) compare adjacent pairs --> O(n)
 // keep track of previous end value
 // if next start is < prevEnd value, it means it's overlapping
 // doesn't matter if next start is same as prev start, already sorted
 // + overlapping doesn't have to have same start points, 
 // could start within prev interval 
 var eraseOverlapIntervals = function(intervals) {
  let sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  console.log(sortedIntervals)
  let res = 0;
  let prevEnd = sortedIntervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (sortedIntervals[i][0] >= prevEnd) {
      prevEnd = sortedIntervals[i][1];
    } else {
      res++;
      prevEnd = Math.min(prevEnd, sortedIntervals[i][1]);
    }
  }

  return res;
};