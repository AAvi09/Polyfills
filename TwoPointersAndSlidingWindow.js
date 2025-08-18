var twoSum = function (nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (seen.has(need)) {
      return [seen.get(need), i];
    }
    seen.set(nums[i], i);
  }

  return [-1, -1];
};

var isSubsequence = function (s, t) {
  let l = 0;
  let r = 0;
  let a = "";
  while (r < t.length) {
    if (s[l] === t[r]) {
      a += t[r];
      l++;
      r++;
    } else {
      r++;
    }
  }
  return s === a;
};

var twoSum = function (numbers, target) {
  let sum = 0;
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    sum = numbers[l] + numbers[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};

//is subsequence using two pointers and space complexity of O(1)
var isSubsequence2 = function (s, t) {
  let l = 0;
  let r = 0;

  while (l < s.length && r < t.length) {
    if (s[l] === t[r]) {
      l++;
    }
    r++;
  }
  return l === s.length;
};

var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  // if(haystack === needle ){
  //     return 0;
  // }
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    for (j = 0; j < m; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
};

//knuth morris pratt algorithm
var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  let i = 0;
  let j = 1;
  let lps = [0];
  while (j < m) {
    if (needle[i] == needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i == 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }
  i = j = 0;
  while (i < n) {
    if (haystack[i] == needle[j]) {
      i++;
      j++;
    } else {
      if (j == 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === m) {
      return i - m;
    }
  }
  return -1;
};

var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA != pB) {
    pA = pA == null ? headB : pA.next;
    pB = pB == null ? headA : pB.next;
  }
  return pA;
};

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxWater = 0;
  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxWater = Math.max(maxWater, area);

    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return maxWater;
};

//3sum
var threeSum = function (arr) {
  arr.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i] != arr[i - 1]) {
      twoSum(arr, i, ans);
    }
  }
  return ans;
};
var twoSum = function (arr, x, ans) {
  let i = x + 1;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j] + arr[x];
    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([arr[i], arr[j], arr[x]]);
      i++;
      j--;
      while (i < j && arr[i] === arr[i - 1]) i++;
      while (i < j && arr[j] === arr[j + 1]) j--;
    }
  }
};
