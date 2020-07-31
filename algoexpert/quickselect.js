function quickselect(array, k) {
  const position = k - 1;
  return quickselectHelper(array, 0, array.length - 1, position);
}
function quickselectHelper(array, startIdx, endIdx, position) {
  while (true) {
    if (startIdx > endIdx) throw new Error();
    const pivot = startIdx;
    let left = startIdx + 1;
    let right = endIdx;
    while (left <= right) {
      if (array[left] > array[pivot] && array[right] < array[pivot])
        [array[left], array[right]] = [array[right], array[left]];
      if (array[left] <= array[pivot]) left++;
      if (array[right] >= array[pivot]) right--;
    }
    [array[right], array[pivot]] = [array[pivot], array[right]];
    if (position === right) {
      return array[right];
    } else if (position > right) {
      startIdx = right + 1;
    } else if (position < right) {
      endIdx = right - 1;
    }
  }
}
