function maxSubarrayOfSizeK(array, k) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size K: ${maxSubarrayOfSizeK(3, [
    2,
    1,
    5,
    1,
    3,
    2
  ])}`
);
console.log(
  `Maximum sum of a subarray of size KL ${maxSubarrayOfSizeK(2, [
    2,
    3,
    4,
    1,
    5
  ])}`
);
