// runtime: O(nlogn)
// space: O(n)
var carFleet = function (target, position, speed) {
  if (position.length === 1) return 1;

  let cars = [];

  for (let i = 0; i < position.length; i++) {
    let currCar = [position[i], speed[i]];
    cars.push(currCar);
  }

  cars.sort((a, b) => a[0] - b[0]);

  // stack contains time to reach target
  let stack = [];

  // start at right bc left one can collide to right and slow down
  for (let i = cars.length - 1; i >= 0; i--) {
    let time = (target - cars[i][0]) / cars[i][1];
    stack.push(time);

    // need 2 cars in stack
    // traversing from right to left, want to keep longer time
    // longer times means slower car
    // if [stack.length - 1] is less than [stack.length - 2], means that they will collide
    if (
      stack.length > 1 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
};
