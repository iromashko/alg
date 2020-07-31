function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}
function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivot = startIdx;
  let left = startIdx + 1;
  let right = endIdx;
  while (left <= right) {
    if (array[left] > array[pivot] && array[right] < array[pivot])
      [array[left], array[right]] = [array[right], array[left]];
    if (array[left] <= array[pivot]) left++;
    if (array[right] >= array[pivot]) right--;
  }
  [array[pivot], array[right]] = [array[right], array[pivot]];
  const leftSideSmaller = right - 1 - startIdx < endIdx - (right + 1);
  if (leftSideSmaller) {
    quickSortHelper(array, startIdx, right - 1);
    quickSortHelper(array, right + 1, endIdx);
  } else {
    quickSortHelper(array, right + 1, endIdx);
    quickSortHelper(array, startIdx, right - 1);
  }
}
