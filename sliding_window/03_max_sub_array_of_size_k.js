function maxSubArrayOfSizeK(k, array) {
  let maxSum = 0;
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

// function max_sub_array_of_size_k(k, arr) {
//   let maxSum = 0,
//     windowSum = 0;

//   for (i = 0; i < arr.length - k + 1; i++) {
//     windowSum = 0;
//     for (j = i; j < i + k; j++) {
//       windowSum += arr[j];
//     }
//     maxSum = Math.max(maxSum, windowSum);
//   }
//   return maxSum;
// }

console.log(
  `Maximum sum of a subarray of size K: ${maxSubArrayOfSizeK(3, [
    2,
    1,
    5,
    1,
    3,
    2
  ])}`
);
console.log(
  `Maximum sum of a subarray of size K: ${maxSubArrayOfSizeK(2, [
    2,
    3,
    4,
    1,
    5
  ])}`
);
console.log(`9 - 7`);
