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

console.log(findMissingNumber([4, 0, 3, 1]));
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
