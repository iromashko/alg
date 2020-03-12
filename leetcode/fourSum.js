function fourSum(array, target, seen = new Set(), result = []) {
  let n = array.length;
  array.sort((a, b) => a - b);
  for (let i = 0; i + 3 < n; ++i) {
    for (let j = i + 3; j < n; ++j) {
      let left = i + 1;
      let right = j - 1;
      while (left < right) {
        let sum = array[i] + array[left] + array[right] + array[j];
        if (sum == target) {
          let key = `${array[i]},${array[left]},${array[right]},${array[j]}`;
          if (!seen.has(key))
            result.push([array[i], array[left], array[right], array[j]]);
          seen.add(key);
          ++left;
          --right;
        } else if (sum < target) {
          ++left;
        } else if (sum > target) {
          --right;
        }
      }
    }
  }
  return result;
}
