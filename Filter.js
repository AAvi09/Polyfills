const arr = [1, 2, 3, 4, 5];

function transformFunction(value, index, arr) {
  return value % 2 === 0;
}

const newArray = filterFunction(arr, transformFunction);

function filterFunction(dataArray, callbackFunction, thisArg) {
  const result = [];

  return result;
}
