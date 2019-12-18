function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (leftIdx >= rightIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swap(leftIdx, rightIdx, array);
    }
    if (array[leftIdx] <= array[pivotIdx]) {leftIdx++}
    if (array[rightIdx] >= array[pivotIdx]) {rightIdx--}
  }
  swap(startIdx, rightIdx, array);
  const leftSubarrayIsSmaller;
  if (leftSubarrayIsSmaller) {
    quickSortHelper()
    quickSortHelper()
  } else {
    quickSortHelper()
    quickSortHelper()
    
  }
}
function swap() {
  
}