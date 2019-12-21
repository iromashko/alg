function selectionSort(array) {
  let start = 0;

  while (start < array.length - 1) {
    let small = start;
    for (let i = start + 1; i < array.length; i++) {
      if (array[small] > array[i]) small = i;
    }
    swap(startIdx, smallestIdx, array);
    startIdx++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
