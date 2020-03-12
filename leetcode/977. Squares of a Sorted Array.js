function sortedSquares(array) {
  let result = new Array(array.length);
  let i = 0;
  let j = array.length - 1;
  let p = j;
  while (i <= j) {
    if (array[i] ** 2 > array[j] ** 2) {
      result[p--] = array[i++] ** 2;
    } else {
      result[p--] = array[j--] ** 2;
    }
  }
  return result;
}
