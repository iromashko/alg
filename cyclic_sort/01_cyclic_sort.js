function cyclicSort(array) {
  let i = 1;
  while (i < array.length) {
    const j = array[i] - 1;
    if (array[i] !== array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }

  return array;
}

module.exports = cyclicSort;
