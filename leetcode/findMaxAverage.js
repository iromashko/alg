function findMaxAverage(array, k) {
  let max = -Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];
    if (windowEnd >= k - 1) {
      max = Math.max(windowSum / k, max);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }
  return max;
}
