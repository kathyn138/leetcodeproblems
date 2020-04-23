/*
58. Length of Last Word

Given a string s consists of upper/lower-case alphabets 
and empty space characters ' ', return the length of last 
word (last word means the last appearing word if we loop 
from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting 
of non-space characters only.

Example:
Input: "Hello World"
Output: 5
*/

var lengthOfLastWord = function (s) {
  if (s.length === 0) return 0;

  let stringArr = s.split(' ');

  // iterate through string backwards until reach first word
  for (let i = stringArr.length - 1; i >= 0; i--) {
    let lastWord = stringArr[i];

    if (lastWord !== '') {
      return lastWord.length;
    }
  }

  // if we never find a word, return 0
  return 0;
};