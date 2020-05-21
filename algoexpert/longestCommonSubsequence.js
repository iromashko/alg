function longestCommonSubsequence(str1, str2) {
  const lengths = [];
  for (let i = 0; i <= str2.length; i++) {
    lengths.push(Array(str1.length + 1).fill(0));
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
      } else {
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
      }
    }
  }
  return buildSequence(lengths, str1);
}
function buildSequence(lengths, string) {
  let sequence = [];
  let i = lengths.length - 1;
  let j = lengths[0].length - 1;
  while (i && j) {
    if (lengths[i][j] === lengths[i - 1][j]) {
      i--;
    } else if (lengths[i][j] === lengths[i][j - 1]) {
      j--;
    } else {
      sequence.unshift(string[j - 1]);
      i--;
      j--;
    }
  }
  return sequence;
}
