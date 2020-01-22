/*
1160. Find Words That Can Be Formed by Characters
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars 
(each character can only be used once).

Return the sum of lengths of all good strings in words.

 

Example 1:
Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.
*/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let word = {};
  let count = 0; 
  
  
  function makeDic(word) {
      let dic = {};
      for (let k = 0; k < word.length; k++) {
          dic[word[k]] ? dic[word[k]]++ : dic[word[k]] = 1;
      }
      return dic;
  }
  
  let charsDic = makeDic(chars);
  
  for (let j = 0; j < words.length; j++) {
      let valid = true; 
      let currentWord = makeDic(words[j])
      for (let key in currentWord) {
          if (!charsDic[key] || charsDic[key] < currentWord[key]) {
              valid = false; 
          }
      }
      if (valid === true) {
          count += words[j].length;
      }
  }
  return count; 
};