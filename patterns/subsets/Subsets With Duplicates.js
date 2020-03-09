function find_subsets(nums) {
  nums.sort();
  const subsets = [[]];
  let startIndex = 0;
  let endIndex = 0;
  for (i = 0; i < nums.length; i++) {
    startIndex = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex + 1;
    }
    endIndex = subsets.length - 1;
    for (j = startIndex; j < endIndex + 1; j++) {
      const set = subsets[j].slice();
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
}

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach(subset => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach(subset => {
  console.log(subset);
});
