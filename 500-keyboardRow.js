/*
500. Keyboard Row

Given a List of words, return the words that can be typed using 
letters of alphabet on only one row's of American keyboard.
 
Example:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

var findWords = function(words) {
  let wordsArr = words.map(word => word.toLowerCase());
  let output = [];

  let firstRow = {
    'q': 1,
    'w': 1, 
    'e': 1,
    'r': 1, 
    't': 1, 
    'y': 1,
    'u': 1,
    'i': 1,
    'o': 1,
    'p': 1
  };
  let secondRow = {
    'a': 1,
    's': 1, 
    'd': 1,
    'f': 1, 
    'g': 1, 
    'h': 1,
    'j': 1,
    'k': 1,
    'l': 1
  };
  let thirdRow = {
    'z': 1,
    'x': 1, 
    'c': 1,
    'v': 1, 
    'b': 1, 
    'n': 1,
    'm': 1
  };
  
  for (let i = 0; i < wordsArr.length; i++) {
    // need to reset this to true between each word 
    let onlyOneRow = true; 
    // first letter of each word tells us which row to use
    let matchingRow = firstRow[wordsArr[i][0]] ? firstRow : secondRow[wordsArr[i][0]] ? secondRow : thirdRow;
    
    for (let j = 0; j < wordsArr[i].length; j++) {
      if (!matchingRow[wordsArr[i][j]]) {
        onlyOneRow = false; 
        break; 
      } 
    }
    // keep track of index only
    // bc we turned everything to lowercase 
    onlyOneRow ? output.push(i) : null;
  }

  return output.map(i => words[i]);
};