// time complexity: O(n log n)
// space complexity: O(1)
var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let curr = mid * mid;
    let next = (mid + 1) * (mid + 1);

    if (curr === x) return mid;
    // mid in between
    if (curr < x && next > x) return mid;

    if (curr < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
