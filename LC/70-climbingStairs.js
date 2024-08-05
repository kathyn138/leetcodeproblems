// dfs approach alone would be 2^n with n being height of tree
// top down dynamic programming using cache allows runtime to be O(n)
// solution is top down left to right approach (dfs + memoization)
// picture it as a tree and there's a lot of calculations u repeat
var climbStairs = function (n) {
  let cache = {};

  function dfs(currStep) {
    if (cache[currStep]) return cache[currStep];

    if (currStep > n) return 0;

    if (currStep === n) return 1;

    return (cache[currStep] = dfs(currStep + 1) + dfs(currStep + 2));
  }

  return dfs(0);
};
