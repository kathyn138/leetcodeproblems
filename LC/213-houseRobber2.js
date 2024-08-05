// runtime: O(n)
// space: O(n)
// approach: same as house robber 1 except run it twice, 
// first excluding last house
// second excluding first house
// Math.max nums[0] as well to account for neighborhoods with 1 house
// eg [1]
var rob = function(nums) {
  function helper(houses) {
    let prev = 0; 
    let beforePrev = 0; 

    for (let i = 0; i < houses.length; i++) {
      let temp = Math.max(houses[i] + beforePrev, prev);
      beforePrev = prev;
      prev = temp;
    }

    return prev;
  }

  let excludeLast = helper(nums.slice(0, nums.length - 1));
  let excludeFirst = helper(nums.slice(1));

  return Math.max(nums[0], excludeLast, excludeFirst)
};