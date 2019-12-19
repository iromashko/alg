function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (i = 0; i < arr.length - K + 1; i++) {
    sum = 0.0;
    for (j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K);
  }

  return result;
}
