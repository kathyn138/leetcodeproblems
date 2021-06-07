/*
1052. Grumpy Bookstore Owner

Today, the bookstore owner has a store open for 
customers.length minutes.  Every minute, some number 
of customers (customers[i]) enter the store, and all
those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  
If the bookstore owner is grumpy on the i-th minute, 
grumpy[i] = 1, otherwise grumpy[i] = 0.  When the 
bookstore owner is grumpy, the customers of that 
minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep 
themselves not grumpy for minutes minutes straight, 
but can only use it once.

Return the maximum number of customers that can be 
satisfied throughout the day.


Example 1:
Input: customers = [1,0,1,2,1,1,7,5], 
grumpy = [0,1,0,1,0,1,0,1], minutes = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
 
Note:
* 1 <= minutes <= customers.length == grumpy.length <= 20000
* 0 <= customers[i] <= 1000
* 0 <= grumpy[i] <= 1
*/

var maxSatisfied = function (customers, grumpy, minutes) {
  let satisfied = 0;

  // count the number of already satisfied customers 

  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 0) {
      satisfied += customers[i];
    }
  }

  // want to see where owner's super power can be applied
  // unsatisfiedByMin is the total number of unsatisfied customers by minute

  let unsatisfiedByMin = [];
  let unsatisfied = 0;

  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 1) {
      unsatisfied += customers[i];
    }

    unsatisfiedByMin.push(unsatisfied);
  }

  let maxSatFromUnsat = 0;

  // if minutes > customers.length, it means every customer is satisfied

  for (let i = 0; i < unsatisfiedByMin.length; i++) {
    let currUnsat = unsatisfiedByMin[i] - unsatisfiedByMin[i - minutes];
    if (minutes <= i) {
      if (currUnsat > maxSatFromUnsat) maxSatFromUnsat = currUnsat;
    } else {
      maxSatFromUnsat = unsatisfiedByMin[i];
    }
  }

  return satisfied + maxSatFromUnsat;
};