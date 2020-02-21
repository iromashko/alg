function findMaxConsecutiveOnes(array) {
  let max = 0;
  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  return max;
}
