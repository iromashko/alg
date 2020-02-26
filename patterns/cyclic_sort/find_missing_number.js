function findMissingNumber(array) {
  let i = 0;
  const n = array.length;
  while (i < n) {
    let j = array[i];
    if (array[i] < n && array[i] !== array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
  for (i = 0; i < n; i++) {
    if (array[i] !== i) {
      return i;
    }
  }
  return n;
}
