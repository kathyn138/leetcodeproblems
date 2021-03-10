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
  // do this first bc need top element
  // cant access if popped off stack
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