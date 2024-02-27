/*
49. Group Anagrams

Given an array of strings, group anagrams together.

Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:
All inputs will be in lowercase.
The order of your output does not matter.
*/

// 2024 solution, efficient solution
// runtime of O(n * m)
// n being total number of strings
// m being length of longest string

// overall approach: group strings by signatures of numOccurrance + Letter
// eg cat --> 1a1c1t
var groupAnagrams = function (strs) {
  function getSignature(str) {
    // array where each idx represents a letter in alphabet
    // alphabet has 26 letters
    let count = Array(26).fill(0);

    // count how many times letters appear
    for (let s of str) {
      count[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let res = '';

    for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
        // remember to add to get original charCode
        // i is in our 0 - 25 idx array
        res += count[i].toString() + String.fromCharCode(i + 'a'.charCodeAt(0));
      }
    }

    return res;
  }

  let groups = {};

  for (let s of strs) {
    let currSig = getSignature(s);

    if (groups[currSig]) {
      groups[currSig].push(s);
    } else {
      groups[currSig] = [s];
    }
  }

  return Object.values(groups);
};

// 2021 solution, brute force solution
// spacetime O(n * m * log m)
// n being number of strings
// m being longest length of a string
function groupAnagrams(strs) {
  let groups = {};

  for (let i = 0; i < strs.length; i++) {
    // order letters alpbabetically
    // to see if word exists in groups obj
    let sortedWord = [...strs[i]].sort().join('');

    if (!groups[sortedWord]) {
      groups[sortedWord] = [strs[i]];
    } else {
      // dont do groups[sortedWord] = groups[sortedWord].push(strs[i])
      groups[sortedWord].push(strs[i]);
    }
  }
  return Object.values(groups);
}

// to test my code
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
