function findSubsets(array) {
  const result = [];
  result.push([]);
  for (let i = 0; i < array.length; i++) {
    currentNumber = array[i];
    const n = result.length;
    for (let j = 0; j < n; j++) {
      const set = result[j].slice(0);
      set.push(currentNumber);
      result.push(set);
    }
  }
  return result;
}

module.exports = findSubsets;
