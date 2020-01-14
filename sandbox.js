function cyclicSort(array) {
  let i = 0;
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

console.log(cyclicSort([3, 1, 5, 4, 2]));
console.log(cyclicSort([2, 6, 4, 3, 1, 5]));
console.log(cyclicSort([1, 5, 6, 4, 3, 2]));
