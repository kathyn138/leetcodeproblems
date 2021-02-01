var minTaps = function (n, ranges) {
  let areasOfCoverage = [];

  // create areas of coverage with taps
  for (let i = 0; i < ranges.length; i++) {
    let currArea = [];
    let leftEnd = i - ranges[i];
    let rightEnd = i + ranges[i];

    // doesn't matter if negative
    // we only want coverage starting at 0 
    if (leftEnd < 0) {
      currArea.push(0);
    } else {
      currArea.push(leftEnd);
    }

    // inclusive right end
    // doesn't matter if exceeds n 
    // we only want coverage to end at n 
    if (rightEnd > n) {
      currArea.push(n);
    } else {
      currArea.push(rightEnd);
    }
    

    areasOfCoverage.push(currArea);
  }

  // sort by earliest left ends 
  // if leftends are the same, sort by right ends
  // sorting by right ends has the biggest range come first
  // eg [0, 8] followed by [0, 5]

  areasOfCoverage.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])

  // taps initialized at 1 bc we will always turn on 
  // the first tap in sorted areasOfCoverage?
  // or does it assume that first tap covers it 
  // given the way areasOfCoverage is sorted 
  // or that first tap will be turned on 
  // eg [ [ 0, 5 ], [ 0, 3 ], [ 1, 3 ], [ 2, 4 ], [ 4, 4 ], [ 5, 5 ] ]
  let taps = 1;
  // need left/right and newLeft/newRight for current and new window
  // current and new window need to overlap 
  // two examples to see how we update windows: 
    // eg left = 0, right = 3, newLeft = 3, newRight = 6, currTap = [4, 6]
    // OR left = 3, right = 6, newLeft = 4, newRight = 6, currTap = [6, 8]
  let left = areasOfCoverage[0][0];
  let newLeft = areasOfCoverage[0][0];
  let right = areasOfCoverage[0][1];
  let newRight = areasOfCoverage[0][1];

  for (let currTap of areasOfCoverage) {
    // currTap[0] === currTap[1] is a tap that only waters itself 
    // we need the taps' ranges to be overlapping
    // eg n = 3, ranges = [0,0,0,0] returns -1
    // areasOfCoverage = [ [ 0, 0 ], [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
    // standalone taps do not count 

    // checks if the left of currTap is already within our window 
    // if already in our window, move onto next tap 
    if (currTap[0] === currTap[1] || currTap[0] === left || currTap[0] === newLeft) continue;

    // checks if currTap's left is within the right bounds of our current window
    if (currTap[0] <= right) {
      // move our new window's left up 
      newLeft = currTap[0];

      // check if current currTap's right is > our new window's right
      // if it is, move our window's right up 
      if (currTap[1] > newRight) {
        newRight = currTap[1];
      }

      continue;
    }

    // check if there's a gap between currTap and new window
    // if currTap's left is out of newRight's bounds
    // means that currTap is not connected to our new window
    // there will be a spot in a garden that's unwatered
    if (newRight < currTap[0]) return -1;

    // add new window onto our current window
    // increment taps every time we add onto our current window
    left = newLeft;
    right = newRight;
    newLeft = currTap[0];
    newRight = currTap[1];
    taps++;
  }

  // reach this when we finish going through all taps 

  // checks if current window or new window hits n 
  // if we never hit n then it means there are areas without coverage
  if (right < n && newRight < n) return -1;

  // check if we need to include the new window to water entire garden 
  // if yes, increment taps
  return right === n ? taps : taps + 1;
};


console.log(minTaps(7, [1, 2, 1, 0, 2, 1, 0, 1])) // 3
console.log(minTaps(2, [1, 2, 3])) // 1