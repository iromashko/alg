function containsDuplicate(array) {
  return new Set(array).size < array.length;
}
