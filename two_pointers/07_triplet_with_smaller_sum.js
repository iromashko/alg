function triplet_with_smaller_sum(array, target) {
  array.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < array.length - 2; i++) {
    count += search_pair(array, target - array[i], i);
  }
  return count;
}

function search_pair(array, target_sum, first) {
  let count = 0;
  let left = first + 1;
  let right = array.length - 1;
  while (left < right) {
    if (array[left] + array[right] < target_sum) {
      count += right - left;
      left += 1;
    } else {
      right -= 1;
    }
  }
  return count;
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
