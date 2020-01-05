function moveZeroes(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[count++] = array[i];
    }
  }
  for (let i = count; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
