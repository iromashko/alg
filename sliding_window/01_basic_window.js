function findAveragesOfSubarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return result;
}

// O(N)
const result = findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8`);
console.log(`Averages of subarrays of size K: ${result}`);
