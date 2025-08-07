var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 2;
  let r = Math.floor(x / 2);
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (x === m * m) {
      return m;
    } else if (x < m * m) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return r;
};

var search = function (arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (target === arr[m]) {
      return m;
    }
    if (arr[l] <= arr[m]) {
      if (target < arr[m] && target >= arr[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};
