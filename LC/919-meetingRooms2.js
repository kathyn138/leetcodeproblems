/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

// approach is to have start times array and end times array 
// sort each array and have a pointer for each array
// pick min b/w start and end
// if start is min, it means that a meeting started before current meeting ended 
// therefore increment currMeetings
// doesn't really matter which meeting ended, only care how many going on at same time
// if meeting start and end at same time, handle end first and decrement


// only check for s < start.length bc 
// start always end before end bc it always comes first

// keep track of how many meetings going on at same time and want max val
export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: the minimum number of conference rooms required
   */
  minMeetingRooms(intervals) {
    let sortedByStart = [...intervals].sort((a, b) => a.start - b.start);
    let sortedByEnd = [...intervals].sort((a, b) => a.end - b.end);
    let start = [];
    let end = [];

    sortedByStart.forEach((s) => start.push(s.start));
    sortedByEnd.forEach((s) => end.push(s.end));

    let currMeetings = 0; 
    let meetingRooms = 0;
    // two pointers for each array 
    let s = 0; 
    let e = 0;

    while (s < start.length) {
      if (start[s] < end[e]) {
        currMeetings++;
        s++;
      } else {
        currMeetings--;
        e++;
      }

      meetingRooms = Math.max(meetingRooms, currMeetings);
    }

    return meetingRooms;
  }
}