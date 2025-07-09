function lengthOfLastWord(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && count > 0) {
      break;
    }
    if (s[i] !== " ") {
      count++;
    }
  }
  return count;
}

function FindWordsContainingCharacter(words, x) {
  let indexes = [];
  if (!Array.isArray(words) || typeof x !== "string" || x.length === 0) {
    // invalid input ya empty x → no matches
    return indexes;
  }
  for (let i = 0; i <= words.length - 1; i++) {
    for (let j = 0; j <= words[i].length - 1; j++) {
      if (words[i][j] === x) {
        indexes.push(i);
        break;
      }
    }
  }
  return indexes;
}

function splitAStringInBalancedStrings(s) {
  let countS = 0;
  let countR = 0;
  let countL = 0;
  let n = 0;
  while (s.length > n) {
    if (s[n] === "R") {
      countR++;
    } else if (s[n] === "L") {
      countL++;
    }
    if (countR === countL) {
      countS++;
      countR = 0;
      countL = 0;
    }
    n++;
  }
  return countS;
}

function reverseStringII(s, k) {
  let temp = 0;
  let rr = 2 * k;
  for (let i = 0; i < s.length; i += rr) {
    if (rr < s.length) {
      temp = s[i];
    }
  }
}

var reverseStr = function (s, k) {
  let s = s.split("");
  for (let x = 0; x < s.length; x = x + 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + n - 1 - i];
      s[x + n - 1 - i] = temp;
    }
  }
  return s.join("");
};

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      i++;
    } else if (!s[j].match(/[a-z0-9]/)) {
      j--;
    } else if (s[i] === s[j]) {
      i++, j--;
    } else {
      return false;
    }
  }
  return true;
};
