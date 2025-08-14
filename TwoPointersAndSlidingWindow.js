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
