function find_subsets(nums) {
  const subsets = [];
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      const set = subsets[j].slice(0);
      set.push(currentNumber);
      subsets.push(set);
    }
  }
  return subsets;
}

module.exports = find_subsets;
