var productExceptSelf = function(nums) {
  // prefix of nums[0] is always 1 bc nothing before it
  let res = [1];
  
  // bc in loop forward start at i = 1, prefix is idx
  let prefix = nums[0];

  // postfix starts at 1 bc nothing after end of nums
  // if starts at last value in nums, 
  // would loop backward starting at res.length - 2
  let postfix = 1;

  // loop forward to make prefix array with res array
  for (let i = 1; i < nums.length; i++) {
    res.push(prefix);
    prefix = prefix * nums[i];
  }
  console.log(res)

  // loop backward and multiply values with prefix array
  for (let j = res.length - 1; j >= 0; j--) {
    res[j] = postfix * res[j];
    postfix = postfix * nums[j];
  }

  return res;
};