/*
56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the 
non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps,
merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 
Constraints:
- 1 <= intervals.length <= 104
- intervals[i].length == 2
- 0 <= starti <= endi <= 104
*/

var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  // sort the intervals by first idx
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [[...intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    // as you go through array,
    // compare previous interval to curr interval
    let prev = res.pop();
    let curr = intervals[i];

    // can merge intervals if
    // curr interval starts before prev interval ends
    if (curr[0] <= prev[1]) {
      // pick the bigger end number between the two intervals
      let biggerEnd = Math.max(prev[1], curr[1]);
      res.push([prev[0], biggerEnd]);
    } else {
      res.push(prev);
      res.push([...curr]);
    }
  }

  return res;
};
