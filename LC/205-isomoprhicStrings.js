/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can 
be replaced to get t.

All occurrences of a character must be replaced with another 
character while preserving the order of characters. No two 
characters may map to the same character, but a character may 
map to itself.

 

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 

Constraints:
* 1 <= s.length <= 5 * 104
* t.length == s.length
* s and t consist of any valid ascii character.
*/

var isIsomorphic = function (s, t) {
  // create two mappings
  // s -> t and t -> s
  let firstToSecond = {};
  let secondToFirst = {};

  for (let i = 0; i < s.length; i++) {
    if (!firstToSecond[s[i]]) {
      firstToSecond[s[i]] = t[i];
    } else {
      // each character can only map to 1 character
      // cannot map to two different characters
      if (firstToSecond[s[i]] !== t[i]) return false;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!secondToFirst[t[i]]) {
      secondToFirst[t[i]] = s[i];
    } else {
      if (secondToFirst[t[i]] !== s[i]) return false;
    }
  }

  return true;
};
