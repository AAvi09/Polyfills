const arr = [1, 2, 3, 4];

// a function which returns a array by doing square of each number.

const result = myMap(arr, transformArray);
console.log(result);

function transformArray(elem, index, dataArray) {
  return elem * elem;
}

function myMap(dataArray, callbackFn) {
  let finalArray = [];
  for (let i = 0; i < dataArray.length; i++) {
    const value = dataArray[i];
    const newValue = callbackFn(value, i, dataArray);
    finalArray.push(newValue);
  }
}
