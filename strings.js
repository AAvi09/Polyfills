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
