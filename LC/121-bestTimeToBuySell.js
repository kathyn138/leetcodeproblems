/* 
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the 
price of a given stock on the ith day.

You want to maximize your profit by choosing a single 
day to buy one stock and choosing a different day in 
the future to sell that stock.

Return the maximum profit you can achieve from this 
transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 
(price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not 
allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done 
and the max profit = 0.
 
Constraints:
* 1 <= prices.length <= 105
* 0 <= prices[i] <= 104
*/

// 2023 SOLN TWO POINTER

var maxProfit = function(prices) {
  let left = 0; 
  // don't start from backwards
  // can't do two pointers that way
  let right = left + 1;
  let maxProfit = 0; 

  while (right < prices.length) {
    let buy = prices[left];
    let sell = prices[right];

    let currProfit = sell - buy; 

    if (currProfit > 0) maxProfit = Math.max(maxProfit, currProfit);

    if (buy > sell) {
      // want left to be at minimum
      // if shift by just 1, could end up with high buy price
      left = right;
    } 

    // regardless of what happens, increment right
    right++;
  }

  return maxProfit;
};

// 2021 SOLN

var maxProfit = function (prices) {
  // overall approach: want to find smallest # then biggest #
  // for this to work, need # that are bigger than smallest # 
  // and go after smallest # 

  let smallestPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    smallestPrice = Math.min(smallestPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - smallestPrice);
  }

  return maxProfit;
};