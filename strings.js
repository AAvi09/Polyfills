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
