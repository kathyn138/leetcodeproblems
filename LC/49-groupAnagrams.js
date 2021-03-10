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
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))