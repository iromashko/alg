function removeDuplicates(array) {
  let pos = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[pos] !== array[i]) {
      array[pos] = array[i];
      pos++;
    }
  }
  return pos;
}
