/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  canAttendMeetings(intervals) {
    let sortedIntervals = intervals.sort((a, b) => a.start - b.start);
    console.log(sortedIntervals)
    // dont need prev end bc not updating it

    for (let i = 0; i < sortedIntervals.length - 1; i++) {
      if (sortedIntervals[i]['end'] > sortedIntervals[i + 1]['start']) return false;
    }

    return true; 
  }
}