/* 
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
 

Constraints:

- 1 <= text.length <= 10^4
- text consists of lower case English letters only.
*/

var maxNumberOfBalloons = function (text) {
  let balCount = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  for (let letter of text) {
    if (typeof balCount[letter] === 'number') {
      balCount[letter]++;
    }
  }

  // balloon has 2 o's and 2 l's 
  // so each set of o's and l's count as 1 iteration of balloon

  balCount['o'] = Math.floor(balCount['o'] / 2)
  balCount['l'] = Math.floor(balCount['l'] / 2);

  let balCountArr = Object.values(balCount);

  // get the min amount of times 'balloon' appeared
  return Math.min(...balCountArr);
};