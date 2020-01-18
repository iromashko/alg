function firstUniqChar(string) {
  for (i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
      return i;
    }
  }
  return -1;
}
