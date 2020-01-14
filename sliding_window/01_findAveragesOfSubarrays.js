function findAveragesOfSubarrays(K, array) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return result;
}

module.exports = findAveragesOfSubarrays;
