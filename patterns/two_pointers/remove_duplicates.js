function removeDuplicates(array) {
  let pos = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[pos] !== array[i]) {
      array[++pos] = array[i];
    }
  }
  return ++pos;
}
