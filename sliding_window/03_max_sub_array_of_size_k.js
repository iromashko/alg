function maxSubarrayOfSizeK(k, array) {
  let maxSum = 0.0;
  let windowSum = 0;
  for (let i = 0; i < array.length - k + 1; i++) {
    windowSum = 0;
    for (let j = i; j < i + k; j++) {
      windowSum += array[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

module.exports = maxSubarrayOfSizeK;
