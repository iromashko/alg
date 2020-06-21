function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}
function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (startIdx > endIdx) return;
  const middle = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[middle];
  if (!bst) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  constructMinHeightBst(array, bst, startIdx, middle - 1);
  constructMinHeightBst(array, bst, middle + 1, endIdx);
  return bst;
}
