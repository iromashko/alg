const findSubsets = require('./01_find_subsets.js');
describe('findSubsets', () => {
  it('do findSubsets', () => {
    const input = [1, 3];
    expect(findSubsets(input)).toEqual([[], [1], [3], [1, 3]]);
    const input2 = [1, 5, 3];
    expect(findSubsets(input2)).toEqual([
      [],
      [1],
      [5],
      [1, 5],
      [3],
      [1, 3],
      [5, 3],
      [1, 5, 3]
    ]);
  });
});

// function find_subsets(nums) {
//   const subsets = [];
//   // start by adding the empty subset
//   subsets.push([]);
//   for (i = 0; i < nums.length; i++) {
//     currentNumber = nums[i];
//     // we will take all existing subsets and insert the current number in them to create new subsets
//     const n = subsets.length;
//     for (j = 0; j < n; j++) {
//       // create a new subset from the existing subset and insert the current element to it
//       const set = subsets[j].slice(0); // clone the permutation
//       set.push(currentNumber);
//       subsets.push(set);
//     }
//   }

//   return subsets;
// }
