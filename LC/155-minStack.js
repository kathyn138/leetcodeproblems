/*155. Min Stack

Design a stack that supports push, pop, top, and 
retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

// april 15, 2024 soln
var MinStack = function() {
  // want to keep min as array for pop later
  this.min = [];
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  // need to adjust min accordinly
  // scenarios:
  // if min is empty or if curr min is less than new val
  // can't do this.min[-1], not python
  if (this.min.length === 0 || val <= this.min[this.min.length - 1]) this.min.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let valToRm = this.stack.pop();
  if (this.min[this.min.length - 1] === valToRm) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};


// aug 17, 2023 soln
var MinStack = function () {
  this.stack = [];
  this.min = []
};

MinStack.prototype.push = function (x) {
  this.stack.push(x);

  // numbers get smaller on min stack 
  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
    this.min.push(x);
  }
};

MinStack.prototype.pop = function () {
  // only want to remove from min array if last element is also top element
  if (this.top() === this.min[this.min.length - 1]) {
    this.min.pop();
  }
  this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called
 * as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */