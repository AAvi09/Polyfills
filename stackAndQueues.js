var MinStack = function () {
  this.s = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.s.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let popped = this.s.pop();
  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var evalRPN = function (tokens) {
  let stack = [];

  for (token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let res;

      switch (token) {
        case "+":
          res = num2 + num1;
          break;
        case "-":
          res = num2 - num1;
          break;
        case "*":
          res = num2 * num1;
          break;
        case "/":
          res = Math.trunc(num2 / num1);
          break;
      }
      stack.push(res);
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let answer = new Array(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    let current = temperatures[i];
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= current
    ) {
      stack.pop();
    }
    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }
  return answer;
};
