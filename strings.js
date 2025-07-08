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
