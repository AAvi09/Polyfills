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

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = Math.floor(l + (r - l) / 2);

      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return r;
  };
};

var isPerfectSquare = function (num) {
  if (num < 2) return num;
  let l = 2;
  let r = Math.floor(num / 2);
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (num === m * m) {
      return m;
    } else if (num < m * m) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return num === r * r;
};

var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (target === nums[m]) {
      return m;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l;
};

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);
    if (target === nums[m]) {
      return m;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};
