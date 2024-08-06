// approach: at each idx, look at what it is and then eval by itself and i + 1
// see it as adding together sub problems starting from idx 0
// each idx is dfs(i) = dfs(i + 1) + dfs(i + 2)
// dfs easier to see when drawing out decision/number tree
// runtime and memory: O(n)
var numDecodings = function (s) {
  let cache = {};
  // at end of str --> 1 way left to decode
  // empty substr --> return 1 as base case
  cache[s.length] = 1;

  let twoAllowed = new Set(['0', '1', '2', '3', '4', '5', '6']);

  // i is curr idx
  function dfs(i) {
    // base cases: seen already, last position in str, invalid

    // if seen already or last position in str
    if (cache[i]) return cache[i];

    // if not at end of str, need to check what it is
    // if invalid
    if (s[i] === '0') return 0;

    // if not 0 and not end of str, know that it's 1 - 9,
    // so can take it as a single digit

    // then subproblem becomes i + 1, to move onto next one
    let res = dfs(i + 1);

    // sometimes can also call i + 2
    // first check that i + 1 is within bounds then that it starts with 1 or 2
    // if starts with 2, make sure i + 2 is 1 - 6
    // can only have up to 26
    if (
      i + 1 < s.length &&
      (s[i] === '1' || (s[i] === '2' && twoAllowed.has(s[i + 1])))
    ) {
      // if yes it's two digit, subproblem then becomes i + 2 to revert back to single digit
      res += dfs(i + 2);
    }

    cache[i] = res;

    return res;
  }

  // how many ways u can decode starting at 0
  return dfs(0);
};
