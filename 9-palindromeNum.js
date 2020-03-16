/*
9. Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. 
From right to left, it becomes 121-. Therefore 
it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it 
is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?
*/

var isPalindrome = function(x) {
  if (x < 0) return false; 

  if (x === 0) return true; 

  let str = x.toString();

  for (let i = 0; i < str.length; i++) {
    // have this loop to prevent it from double checking 
    // otherwise, would keep looping until i reaches the end
    if (i + 1 === str.length - i - 1) {
      return str[i] === str[str.length - i - 1];
    }

    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true; 
};
