function find_averages_of_subarrays(K, array) {
  const result = [];
  for (let i = 0; i < array.length - K + 1; i++) {
    sum = 0.0;
    for (j = i; j < i + K; j++) {
      sum += array[j];
    }
    result.push(sum / K);
  }
  return result;
}

// O(N * K)
const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8`);
console.log(`Averages of subarrays of size K: ${result}`);
