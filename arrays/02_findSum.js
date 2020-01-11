// findSum function return true if
// there are two values in array who
// sum to value and returns false otherwise
function findSum(arr, value) {
  let found_values = new Set();
  var results = [];
  for (let i in arr) {
    found_values.add(arr[i]);

    if (found_values.has(value - arr[i])) {
      results.push(value - arr[i]);
      results.push(arr[i]);
      return results;
    }
  }

  return false;
}

console.log(findSum([1, 2, 4], 5));
console.log(findSum([1, 2, 3, 4], 10));
