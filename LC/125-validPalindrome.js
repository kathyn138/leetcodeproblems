var isPalindrome = function(s) {
  // want each char in 1 idx, not entire s in 1 idx
  let res = '';
  let regex = /[a-z0-9]/i;

  for (let l of s) {
    if (regex.test(l)) {
      res += l.toLowerCase();
    }
  }

  let front = 0; 
  let back = res.length - 1;

  while (front !== back && front < back) {
    if (res[front] !== res[back]) return false;
    front++;
    back--;
  }

  return true;
};