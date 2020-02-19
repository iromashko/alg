function heapSort(array) {
  buildMaxHeap(array);
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    [array[0], array[endIdx]] = [array[endIdx], array[0]];
    siftDown(0, endIdx - 1, array);
  }
  return array;
}
function buildMaxHeap(array) {
  const firstParentIdx = Math.floor((array.length - 2) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    siftDown(currentIdx, array.length - 1, array);
  }
}
function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1;
  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
    let idxToSwp;
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
      idxToSwp = childTwoIdx;
    } else {
      idxToSwp = childOneIdx;
    }
    if (heap[idxToSwp] > heap[currentIdx]) {
      [heap[idxToSwp], heap[currentIdx]] = [heap[currentIdx], heap[idxToSwp]];
      currentIdx = idxToSwp;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      return;
    }
  }
}
