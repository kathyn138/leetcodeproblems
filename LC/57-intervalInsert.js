var insert = function (intervals, newInterval) {
  // overall approach:
  // figure out when to append current interval, finalized new interval
  // and when to update newInterval for overlapping interval
  if (!intervals.length) return [newInterval];

  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    let currStart = intervals[i][0];
    let currEnd = intervals[i][1];
    let newStart = newInterval[0];
    let newEnd = newInterval[1];

    if (newStart > currEnd) {
      res.push(intervals[i]);
    } else if (newEnd < currStart) {
      // once insert new interval,
      // rest is just remainder of intervals
      res.push(newInterval);
      res.push(...intervals.slice(i));
      return res;
    } else {
      // overlapping intervals
      newInterval = [Math.min(currStart, newStart), Math.max(currEnd, newEnd)];
    }
  }

  // in the event that the res is just one
  // eg intervals = [[1, 5]], newInterval = [2, 3], expected = [[1, 5]]
  res.push(newInterval);
  return res;
};
