// runtime: O(n)
// start at end and check if preceding can reach goal
// once reach end, check if goal === 0
// move goal to i inside of subtracting one bc steps could be more than goal
// eg [2, 0, 0]
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    let steps = nums[i] + i;

    if (steps >= goal) goal = i;
  }

  return goal === 0;
};
