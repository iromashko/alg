function findAveragesOfSubarrays(K, array) {
  const result = [];
  for (let i = 0; i < array.length - K + 1; i++) {
    let sum = 0.0;

    for (let j = i; j < i + K; j++) {
      sum += array[j];
    }

    result.push(sum / K);
  }

  return result;
}

function findAveragesOfSubarrays_(K, array) {
  const result = [];
  for (let i = 0; i < array.length - K + 1; i++) {
    let sum = 0.0;

    for (let j = i; j < i + K; j++) {
      sum += array[j];
    }

    result.push(sum / K);
  }
  return result;
}

// O(N * K)
const result = findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8`);
console.log(`Averages of subarrays of size K: ${result}`);
