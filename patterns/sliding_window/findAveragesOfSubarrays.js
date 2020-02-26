function findAveragesOfSubarrays(k, array) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= k - 1) {
      result.push(windowSum / k);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return result;
}

module.exports = findAveragesOfSubarrays;
