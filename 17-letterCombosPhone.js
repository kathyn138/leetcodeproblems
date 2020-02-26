/*
17. Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) 
is given below. Note that 1 does not map to any letters.


Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

Note:
Although the above answer is in lexicographical order, your 
answer could be in any order you want.
*/

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  let digitsMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  if (digits.length === 1) return digitsMap[digits];

  let letterCombosQueue = [''];

  for (let i = 0; i < digits.length; i++) {
    let letters = digitsMap[digits[i]];
    // queueLen prevents from removing everything from queue 
    // acts as a stopping point
    let queueLen = letterCombosQueue.length;

    for (let k = 0; k < queueLen; k++) {
      let currItem = letterCombosQueue.shift();

      for (let j = 0; j < letters.length; j++) {
        // on very first iteration it'll push letters of first digit
        // onto letterCombosQueue 
        // those letters will be used for the first set of combos 
        letterCombosQueue.push(currItem + letters[j]);
      }
    }
  }

  return letterCombosQueue;
};