function findSubsets(array) {
  const subsets = [];
  subsets.push([]);
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      const set = subsets[j].slice();
      set.push(currentNumber);
      subsets.push(set);
    }
  }
  return subsets;
}
