/*
198. House Robber

You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed, the only constraint
stopping you from robbing each of them is that adjacent houses have
security system connected and it will automatically contact the
police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of
money of each house, determine the maximum amount of money
you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then
            rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3
            (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.

Constraints:
- 0 <= nums.length <= 100
- 0 <= nums[i] <= 400
*/

// 2024 soln
// runtime: O(n)
// for each value, keep track of previous house and house before prev
// and decide max between beforePrev + curr house, or prev house
var rob = function (nums) {
  // [beforePrev, prev, n, n+1, ...]
  let beforePrev = 0;
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
    let temp = Math.max(beforePrev + nums[i], prev);
    // move / update pointers
    beforePrev = prev;
    prev = temp;
  }

  return prev;
  // prev will be the last value and therefore will be max value u can rob from entire neighborhood
};

// 2020 soln
var rob = function (nums) {
  let currMax = 0;
  let prevMax = 0;

  for (let i = 0; i < nums.length; i++) {
    // cant do prevMax = currMax bc prevMax used in comparison
    // at this point, prevMax !== currMax
    // store currMax as it'll become new prevMax
    let temp = currMax;
    // currMax gets redefined
    // alternate between the maxes
    // eg [1, 2, 3, 1]
    // at i = 1, prevMax + 1 = 0 + 2
    // currMax = 1
    currMax = Math.max(prevMax + nums[i], currMax);
    // update prevMax
    prevMax = temp;
  }

  return currMax;
};

// 4
console.log(rob([1, 2, 3, 1]));
