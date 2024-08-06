// top down approach
 // m = amount
 // n = coins.length
 // runtime: O(m * n)
 // space: O(m) bc of cache size, worst case is every amount
 // cache can be {} or [], doesn't matter in this case bc not iterating thru cache
 // approach: for each coin, subtract from amt and see if >= 0
 // also cache results as we go along to rm elimated work
 // visualize with decision tree 
 var coinChange = function(coins, amount) {
  function dfs(coins, amount, cache) {
    if (!amount) return 0;

    let minCoins = Infinity;

    for (let currCoin of coins) {
      let remainder = amount - currCoin;
      if (remainder >= 0) {
        // 1 count of current coin
        // then remainder is in cache or do dfs again 
        let count = 1 + (cache[remainder] || dfs(coins, remainder, cache));

        if (count < minCoins) minCoins = count; 
      }
    }

    // remember to cache 
    return cache[amount] = minCoins; 
  }

  let res = dfs(coins, amount, []);

  return res === Infinity ? -1 : res;
};