// function findAveragesOfSubarrays(K, array) {
//   const result = [];
//   let windowSum = 0.0;
//   let windowStart = 0;
//   for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
//     windowSum += array[windowEnd];

//     if (windowEnd >= K - 1) {
//       result.push(windowSum / K);
//       windowSum -= array[windowStart];
//       windowStart++;
//     }
//   }

//   return result;
// }

function findAveragesOfSubarrays_(K, array) {
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

// O(N)
const result = findAveragesOfSubarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8`);
console.log(`Averages of subarrays of size K: ${result}`);
