const arr = [1, 2, 3, 4, 5.6, 8, 9];

// a function which returns a array by doing square of each number.

Array.prototype.myMap = function (callbackFn) {
  console.log("this", this);
  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }
  const result = new Array(this.length);
  let flag = 0;
  while (flag < this.length) {
    if (this.hasOwnProperty(flag)) {
      const value = this[flag];
      const newValue = callbackFn(value, flag, this);
      result[flag] = newValue;
    }
    flag++;
  }
  return result;
};

function getSquareOfNumber(num) {
  return num * num;
}

const result = arr.myMap(getSquareOfNumber);

const sample1 = [1, 2, 3, 4, 5];
const sample2 = new Array(10);

const result1 = sample1.myMap((d) => d * 2);
const result2 = sample2.myMap((d) => d * 2);
const result3 = sample2.myMap((d, i) => i + 1);
const result4 = sample2.myMap((d, i, arr) => {
  console.log("arr", arr);
});
const result5 = sample1.myMap((d, i, arr) => {
  d * 6;
});
const result6 = sample1.myMap((d, i, arr) => {
  console.log("arr", arr);
  return d * 9;
});
console.log({ result1, result2, result3, result4, result5, result6s });
