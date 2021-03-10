/*
93. Restore IP Addresses

Given a string containing only digits, restore it 
by returning all possible valid IP address combinations.

Example:

Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
*/

var restoreIpAddresses = function (s) {
  if (s.length > 12 || s.length < 4) return [];
  let res = [];

  function helper(s, currIpSet, res) {
    // for when there's only a set of 4 left 
    if (currIpSet.length === 4 && s.length === 0) {
      res.push(currIpSet.join('.'));
      return;
    }

    // start at 1 bc of slice 
    for (let i = 1; i < 4; i++) {
      if (s.length < i) return;
      let currSubVal = s.slice(0, i);

      // handles edge cases 
      if (currSubVal[0] === '0' && currSubVal.length > 1) return;
      if (Number(currSubVal) > 255 || Number(currSubVal) < 0) return;

      currIpSet.push(currSubVal);
      // shorten s with each iteration
      helper(s.slice(i), currIpSet, res);
      currIpSet.pop();
    }
  }

  helper(s, [], res);
  return res;
}
