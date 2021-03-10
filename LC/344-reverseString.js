/*
344. Reverse String

Write a function that reverses a string. The input string is given as 
an array of characters char[].

Do not allocate extra space for another array, you must do this by 
modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0; i < s.length - 1; i++) {
    
        let leftIndex = i; 
        let rightIndex = s.length - 1 - i;

        if (leftIndex > rightIndex) {
              break;
        }

        let temp = s[leftIndex];
        s[leftIndex] = s[rightIndex];
        s[rightIndex] = temp;
  }
    
    return s;
};