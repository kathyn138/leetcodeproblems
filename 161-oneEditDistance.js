/*** 
Similar to One Away in Cracking the Coding Interview
(Chapter 1)

161. One Edit Distance

Given two strings s and t, return true if they are
both one edit distance apart. Otherwise return false. 

A string s is said to be one distance apart from 
string t if you can: 
- Insert exactly one character into s to get t. 
- Delete exactly one character from s to get t. 
- Replace exactly one character of s with a different
  character to get t. 

Example 1: 
Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t. 

Example 2: 
Input: s = "", t = ""
Output: false
Explanation: We cannot get t from s by only one step.

Example 3: 
Input: s = "a", t = ""
Output: true

Example 4:
Input: s = "", t = "A"
Output: true
 
*/

function oneEditDistance(s, t) {
  // if (s === t) return false; 

  let diff = Math.abs(s.length - t.length);

  if (diff > 1 || s === t) return false;

  let firstPointer = 0;
  let secondPointer = 0;
  let modified = false;

  while (firstPointer < s.length && secondPointer < t.length) {
    if (s[firstPointer] !== t[secondPointer]) {
      if (modified === true) {
        console.log('here')
        return false[]
      } else {
        modified = true;
      }

      // to offset insertion/deletion
      // when s and t aren't originally equal length
      // eg "aca", "caca"
      if (t.length > s.length) {
        firstPointer--;
      } else if (s.length > t.length) {
        secondPointer--;
      }
    }
    firstPointer++;
    secondPointer++;
  }

  return true;
}

// console.log(oneEditDistance("",""))
// console.log(oneEditDistance("a", ""))
// console.log(oneEditDistance("", "A"))
// console.log(oneEditDistance("ac", "acb"))
// console.log(oneEditDistance("acb", "cbc"))
console.log(oneEditDistance("aca", "caca"))
console.log(oneEditDistance("caca", "aca"))