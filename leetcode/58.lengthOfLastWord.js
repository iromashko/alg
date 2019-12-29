var lengthOfLastWord = function(s) {
  let count = 0;
  let left = 0;
  let right = s.length;

  while (left < right) {
    if (s[left] !== ' ') {
      count++;
      left++;
    } else {
      while (left < right && s[left] === ' ') left++;

      if (left === right) {
        return count;
      } else {
        count = 0;
      }
    }
  }
  return count;
};
