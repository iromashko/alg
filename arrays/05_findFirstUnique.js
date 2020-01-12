function findFirstUnique(array) {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in counts) {
      counts[array[i]]++;
    } else {
      counts[array[i]] = 1;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (counts[array[i]] === 1) return array[i];
  }

  return null;
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6, 9, 0, 3]));
